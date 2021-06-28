import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ResultModel } from 'src/app/evaluations/models/result.model';

import { TestModel } from 'src/app/evaluations/models/test.model';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {
  
  @Input() tests: TestModel[];

  displayedColumns: string[] = ['Tests', 'Buttons'];

  constructor(protected router: Router){
  }

  ngOnInit() {
  }

  onClickResults(tests: TestModel){
    this.router.navigateByUrl("/results", { state: { results: tests.results, name: tests.id}})
  }

  onClickQuestions(tests: TestModel){
    this.router.navigateByUrl("/questions", { state: { questions: tests.questions, name: tests.id}})
  }
}
