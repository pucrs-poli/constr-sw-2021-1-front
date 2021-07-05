import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribersModel } from 'src/app/disciplin-editions/models/subscribers.model';

@Component({
  selector: 'app-subscribers-table',
  templateUrl: './subscribers-table.component.html',
  styleUrls: ['./subscribers-table.component.css']
})

export class SubscribersTableComponent implements OnInit {
  @Input() dataSource: SubscribersModel[];
  id: string;
  student_id: number;
  sub_date: string;
  active: boolean;
  displayedColumns: string[] =  ['id', 'student_id', 'sub_date', 'active', 'Buttons'];
  
  constructor(protected router: Router) {};

  ngOnInit() {
    this.id = this.dataSource[1].id;
    this.student_id = this.dataSource[1].student_id;
    this.sub_date = this.dataSource[1].sub_date;
    this.active = this.dataSource[1].active;
  }
}
