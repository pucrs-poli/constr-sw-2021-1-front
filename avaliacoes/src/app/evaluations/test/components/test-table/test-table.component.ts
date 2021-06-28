import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { TestModel } from 'src/app/evaluations/models/test.model';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {
  
  @Input() tests: TestModel[];

  displayedColumns: string[] = ['Tests', 'Buttons'];

  ngOnInit() {
  }
}
