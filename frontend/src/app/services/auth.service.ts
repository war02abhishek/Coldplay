import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/auth`;

  constructor(private api: ApiService) {}

  login(credentials: { [key: string]: any }): Observable<any> {
    return this.api.post(`${this.baseUrl}/login`, credentials);
  }

  /* // Not needed currently for JWT
  logout(): Observable<any> {
    return this.api.post(`${this.baseUrl}/logout`, {});
  }
  */

  changePassword(payload: {
    password: string;
    newPassword: string;
  }): Observable<any> {
    return this.api.post(`${this.baseUrl}/change-password`, payload);
  }

  forgotPassword(payload: { username: string }): Observable<any> {
    return this.api.post(`${this.baseUrl}/forgot-password`, payload);
  }

  validateResetPasswordToken(payload: { token: string }): Observable<any> {
    return this.api.post(`${this.baseUrl}/validate-token`, payload);
  }

  resetPassword(payload: { newPassword: string }): Observable<any> {
    return this.api.post(`${this.baseUrl}/reset-password`, payload);
  }
}
