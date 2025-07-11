import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = `${environment.apiUrl}/user`;

  constructor(private api: ApiService) {}

  getRoles(): Observable<any> {
    return this.api.get(`${this.baseUrl}/roles`);
  }

  getPrivileges(roleId?: string): Observable<any> {
    const params: any = {};

    if (roleId) {
      params['roleId'] = roleId;
    }
    return this.api.get(`${this.baseUrl}/privileges`, params);
  }

  assignPrivileges(payload: {
    roleId: string;
    privilegeId: number;
  }): Observable<any> {
    return this.api.post(`${this.baseUrl}/privileges-mapping`, payload);
  }

  getL2Users(): Observable<any> {
    return this.api.get(`${this.baseUrl}/l2-users`);
  }

  getL1Users(l2UserId?: number): Observable<any> {
    const params: any = {};

    if (l2UserId) {
      params['l2UserId'] = l2UserId;
    }
    return this.api.get(`${this.baseUrl}/l1-users`, params);
  }

  createUser(payload: {
    roleId: string;
    username: string;
    password: string;
    mobile: string;
    email: string;
    parentUserId?: number;
  }): Observable<any> {
    return this.api.post(`${this.baseUrl}/create-user`, payload);
  }

  getPolicyMapping(userId?: number): Observable<any> {
    const params: any = {};

    if (userId) {
      params['userId'] = userId;
    }
    return this.api.get(`${this.baseUrl}/policy-mapping`, params);
  }

  assignPolicyMapping(payload: {
    userId: number;
    contractType: string;
    policyNumber: string;
  }): Observable<any> {
    return this.api.post(`${this.baseUrl}/assign-policy`, payload);
  }
}
