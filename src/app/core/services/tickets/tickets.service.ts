import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../../models/tickets/DTO.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(public http: HttpClient) {}

  get(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('./../../../assets/tickets.json');
  }
}
