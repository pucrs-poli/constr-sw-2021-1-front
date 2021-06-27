import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestModel } from '../models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  @Input() tests: TestModel[];
  testName: string = '';
  teste: any;
  
  constructor(private router: Router) {
    this.teste = this.router.getCurrentNavigation().extras.state.test;
  }

  ngOnInit() {
    this.testName = this.teste.name;
  }
}
