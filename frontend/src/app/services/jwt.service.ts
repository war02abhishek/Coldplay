import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private storageService: StorageService) {}

  private decodeToken(token: string): any | null {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('JWT Decode Error:', e);
      return null;
    }
  }

  async getUsername(): Promise<string> {
    const token = await this.storageService.getItem('jwt_token');
    if (!token) return '';
    const decoded = this.decodeToken(token);
    return decoded?.sub || '';
  }

  async getUserId(): Promise<number> {
    const token = await this.storageService.getItem('jwt_token');
    if (!token) return NaN;
    const decoded = this.decodeToken(token);
    return decoded?.userId || NaN;
  }

  async getRoleId(): Promise<string> {
    const token = await this.storageService.getItem('jwt_token');
    if (!token) return '';
    const decoded = this.decodeToken(token);
    return decoded?.roleId || '';
  }
}
