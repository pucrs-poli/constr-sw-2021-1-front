import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsModel } from 'src/app/disciplin-editions/models/results.model';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})

export class ResultsTableComponent implements OnInit {
  @Input() dataSource: ResultsModel[];
  id: string;
  student_id: number;
  date: string;
  description: string;
  result: number;
  displayedColumns: string[] =  ['id' ,'student_id', 'date', 'description', 'results', 'Buttons'];
  
  constructor(protected router: Router) {};

  ngOnInit() {
    this.id = this.dataSource[1].id;
    this.student_id = this.dataSource[1].student_id;
    this.date = this.dataSource[1].date;
    this.description = this.dataSource[1].description;
    this.result = this.dataSource[1].result;
  }
}