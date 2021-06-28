import { Component, OnInit } from '@angular/core';

export interface Reservation {
  id: string;
  lessonID: string;
  reason: string;
  resource: object; // .name
  day: string;
  schedule: string;
}

const RESERVATION_DATA: Reservation[] = [
  {id: '60d90188eb3c5a3d9616ae21', lessonID: '5525156211saa6s5', reason: 'Apresentação de trabalhos na turma', resource: { name: 'Projetor Epson PowerLite S41'}, day: '05/07', schedule: 'AB'},
];

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent implements OnInit {

  handleClick(event: Event, item: Reservation) {
    alert(`Editar reserva com ID ${item.id}`);
  }

  displayedColumns: string[] = ['id', 'lessonID', 'resource', 'day', 'schedule', 'edit'];
  dataSource = RESERVATION_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
