import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private readonly baseUrl = `${environment.apiUrl}/master`;

  constructor(private api: ApiService) {}

  getProductsList(): Observable<any> {
    return this.api.get(`${this.baseUrl}/products`);
  }

  getMarineDocumentsList(contractType: string): Observable<any> {
    return this.api.get(`${this.baseUrl}/documents`, { contractType });
  }

  getMarineLossType(): Observable<any> {
    return this.api.get(`${this.baseUrl}/loss-type`);
  }

  getMarineCauseType(): Observable<any> {
    return this.api.get(`${this.baseUrl}/cause-type`);
  }

  getGeographyList(): Observable<any> {
    return this.api.get(`${this.baseUrl}/geography`);
  }

  getMarinePackagingNature(): Observable<any> {
    return this.api.get(`${this.baseUrl}/packaging-nature`);
  }

  getMarineTransportByMode(): Observable<any> {
    return this.api.get(`${this.baseUrl}/transporting-mode`);
  }

  getMarineConsignmentType(): Observable<any> {
    return this.api.get(`${this.baseUrl}/consignment-type`);
  }

  getMarineTransitMode(): Observable<any> {
    return this.api.get(`${this.baseUrl}/transit-mode`);
  }

  getMarineVesselName(): Observable<any> {
    return this.api.get(`${this.baseUrl}/vessel-name`);
  }

  getCountriesList(): Observable<any> {
    return this.api.get(`${this.baseUrl}/countries`);
  }
}
