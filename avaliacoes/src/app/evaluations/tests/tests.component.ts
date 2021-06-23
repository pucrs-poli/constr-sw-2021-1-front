import { Component, OnInit } from '@angular/core';
import { TestModel } from '../models/test.model';
import { EvaluationsService } from '../services/evaluations.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests: TestModel[];

  constructor(protected evaluationService: EvaluationsService) { }

  ngOnInit() {
    this.evaluationService.getAllTests().subscribe(
      (tests: TestModel[]) => this.tests = tests
    )
  }

}
