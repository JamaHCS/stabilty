import { TicketStatus } from "src/app/utils/global/enums";

export interface Ticket {
  id: number;
  title: string;
  date: string | Date;
  active_days: number;
  status: boolean | TicketStatus;
  responsable: string;
  commentaries: string;
}
