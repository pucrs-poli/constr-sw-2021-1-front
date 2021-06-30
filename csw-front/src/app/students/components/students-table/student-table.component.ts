import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TestModel} from "../../../evaluations/models/test.model";

export interface SubscriptionElement {
  id: string;
  code: number;
  idStudent: string;
  edition: string;
}

const ELEMENT_DATA: SubscriptionElement[] = [
  {id: '60d90188eb3c5a3d9616ae21', code: 1, idStudent: '123', edition: 'PRIMEIRA'},
  {id: '60d901bbeb3c5a3d9616ae22', code: 3, idStudent: '154', edition: 'SEGUNDA'},
];

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'code', 'idStudent', 'edition', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;
  readonly apiURL: string;

  handleClick(event: Event, item: SubscriptionElement) {
    alert(`Editar recurso com ID ${item.idStudent}`);
  }

  handleRemove(event: Event, item: SubscriptionElement){
    alert(`Remover ID ${item.idStudent}` );
  }

  constructor(private http: HttpClient) {
    this.apiURL = 'http://ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api';
  }

  // Getting CORS error from API
  ngOnInit(): void {
    this.http.get(`${ this.apiURL }/subscriptions`)
           .subscribe((result: any) => console.log(result));
  }

}
