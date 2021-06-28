import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-tests',
  templateUrl: './form-tests.component.html',
  styleUrls: ['./form-tests.component.css']
})
export class FormTestsComponent implements OnInit {

  subject: string;

  constructor(protected router: Router) {
    this.subject = this.router.getCurrentNavigation().extras.state.subject;
   }

  ngOnInit(): void {
  }

}
