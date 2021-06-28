import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestModel } from '../models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  
  testName: string;
  tests: TestModel[];
  
  constructor(private router: Router) {
    this.tests = this.router.getCurrentNavigation().extras.state.test;
    this.testName = this.router.getCurrentNavigation().extras.state.subject;
  }
}
