import { Component, Input, OnInit } from '@angular/core';
import { ResultModel } from '../../../models/result.model';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  @Input() results: ResultModel[];

  displayedColumns: string[] = ['Results'];

  constructor() { }

  ngOnInit(): void {
  }

}
