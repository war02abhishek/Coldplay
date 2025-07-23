import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  private readonly baseUrl = `${environment.apiUrl}/ticketgateway/admin`;

  constructor(private api: ApiService) {}

  getAllConcerts(): Observable<any> {
    return this.api.get(`${this.baseUrl}/getallConcerts`);
  }

  getConcertById(concertId: string): Observable<any> {
    return this.api.get(`${this.baseUrl}/details/${concertId}`);
  }
}
