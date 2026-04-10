import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private readonly baseUrl = `${environment.apiUrl}/ticketgateway/tickets`;

  constructor(private api: ApiService) {}

  bookTicket(payload: any): Observable<any> {
    return this.api.post(`${this.baseUrl}/book`, payload);
  }
}
