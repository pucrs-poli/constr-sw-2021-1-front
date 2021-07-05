import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestModel } from '../models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  
  subject: string;
  tests: TestModel[];
  
  constructor(protected router: Router) {
    this.tests = this.router.getCurrentNavigation().extras.state.test;
    this.subject = this.router.getCurrentNavigation().extras.state.subject;
  }
  
 /*  onClickPrimaryButton(event){
    this.router.navigateByUrl("/form-test", { state: { subject: this.subject }});
  } */
}
