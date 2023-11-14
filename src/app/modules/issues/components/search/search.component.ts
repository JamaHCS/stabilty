import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Ticket } from 'src/app/core/models/tickets/DTO.model';
import { TicketsService } from 'src/app/core/services/tickets/tickets.service';
import { TicketStatus } from 'src/app/utils/global/enums';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public status: boolean = false;
  public tickets: Ticket[] = [];
  public selectedTickets: Ticket[] = [];

  constructor(private TicketsService: TicketsService) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.TicketsService.get().subscribe({
      next: (res) => {
        this.tickets = res.map((e) => ({
          ...e,
          date: new Date(e.date),
          status: e.status ? TicketStatus.open : TicketStatus.closed,
        }));
      },
    });
  }

  filter($event: Event, table: Table, column: string) {
    const inputValue: any = (
      $event.target as HTMLInputElement
    ).value.toLowerCase();

    table.filter(inputValue, column, 'contains');
  }
}
