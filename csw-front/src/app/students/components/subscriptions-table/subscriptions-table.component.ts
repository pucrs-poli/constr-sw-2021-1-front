import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StudentElement {
  idStudent: string;
  name: number;
  cpf: string;
  birthDate: string;
  address: string;
}

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit {
  displayedColumns: string[] = ['code', 'edition'];
  @Input()
  idStudent: string;
  dataSource;
  readonly apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'http://ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api';
  }

  // Getting CORS error from API
  ngOnInit(): void {
    this.http.get(`${ this.apiURL }/subscriptions`)
       .subscribe((result: any) => {
         const subscriptions = [];
         result.content.subscriptions.forEach(sub => {
           if (sub.idStudent === this.idStudent) {
             subscriptions.push(sub);
           }
         });
         this.dataSource = subscriptions;
       });
  }

}
