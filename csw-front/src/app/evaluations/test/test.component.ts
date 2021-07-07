import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TestModel } from '../models/test.model';
import { FormTestsComponent } from '../form-tests/form-tests.component';
import { EvaluationsService } from '../services/evaluations.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  
  subject: string;
  tests: TestModel[];
  test: TestModel;

  constructor(protected router: Router,
              protected dialog: MatDialog,
              protected evaluationService: EvaluationsService) {
    this.tests = this.router.getCurrentNavigation().extras.state.test;
    this.subject = this.router.getCurrentNavigation().extras.state.subject;
  }
  
  openDialogTests() {
    const dialogRef = this.dialog.open(FormTestsComponent, {
      data: this.subject,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.test = result;
      this.test.subjects = [this.subject];
      this.test.results = [];
      this.evaluationService.postTest(this.test).subscribe( test =>{
        this.tests.push(test)
      });
    });

    
  }

}
