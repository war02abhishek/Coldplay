import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly secret = environment.localSecret;
  private readonly salt = environment.salt;
  private readonly localStoragePrefix = 'encrypted_';

  constructor() {}

  private async generateKey(): Promise<CryptoKey> {
    const encoder = new TextEncoder();
    const passwordKey = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(this.secret),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );

    return window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: encoder.encode(this.salt),
        iterations: 100000,
        hash: 'SHA-256',
      },
      passwordKey,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async setItem(key: string, value: any): Promise<void> {
    try {
      const jsonData = JSON.stringify(value);
      const encoder = new TextEncoder();
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const cryptoKey = await this.generateKey();
      const encrypted = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        encoder.encode(jsonData)
      );

      const storedData = {
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encrypted)),
      };

      localStorage.setItem(
        this.localStoragePrefix + key,
        JSON.stringify(storedData)
      );
    } catch (err) {
      console.error('Error storing encrypted item:', err);
    }
  }

  async getItem(key: string): Promise<any | null> {
    try {
      const stored = localStorage.getItem(this.localStoragePrefix + key);
      if (!stored) return null;

      const parsed = JSON.parse(stored);
      const iv = new Uint8Array(parsed.iv);
      const encryptedData = new Uint8Array(parsed.data);

      const cryptoKey = await this.generateKey();
      const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        encryptedData
      );

      const decoder = new TextDecoder();
      return JSON.parse(decoder.decode(decrypted));
    } catch (err) {
      console.error('Error retrieving encrypted item:', err);
      return null;
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(this.localStoragePrefix + key);
  }

  clear(): void {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(this.localStoragePrefix)) {
        localStorage.removeItem(key);
      }
    });
  }
}
