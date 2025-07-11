import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private readonly baseUrl = `${environment.apiUrl}/claim`;

  constructor(private api: ApiService) {}

  getListOfClaims(): Observable<any> {
    return this.api.get(`${this.baseUrl}/list-of-claims`);
  }

  getClaimsReport(policyNo: string): Observable<any> {
    const params: any = {};

    if (policyNo) {
      params['policyNo'] = policyNo;
    }
    return this.api.get(`${this.baseUrl}/claims-report`, params);
  }
}
