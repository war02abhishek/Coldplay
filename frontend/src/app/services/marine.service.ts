import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarineService {
  private readonly baseUrl = `${environment.apiUrl}/marine`;

  constructor(private api: ApiService) {}

  submitClaimDetails(payload: any): Observable<any> {
    return this.api.post(`${this.baseUrl}/submit-claim-details`, payload);
  }

  submitBillDetails(payload: any): Observable<any> {
    return this.api.post(`${this.baseUrl}/submit-bill-details`, payload);
  }

  submitDocuments(payload: any): Observable<any> {
    return this.api.post(`${this.baseUrl}/submit-bill-details`, payload);
  }

  getClaimsData(payload: { claimDetailsId: string }): Observable<any> {
    return this.api.get(`${this.baseUrl}/view-claim`, payload);
  }
}
