import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TestModel } from '../models/test.model';
import { FormTestsComponent } from '../form-tests/form-tests.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  
  subject: string;
  tests: TestModel[];
  
  constructor(protected router: Router,
              protected dialog: MatDialog) {
    this.tests = this.router.getCurrentNavigation().extras.state.test;
    this.subject = this.router.getCurrentNavigation().extras.state.subject;
  }
  
  openDialogTests() {
    const dialogRef = this.dialog.open(FormTestsComponent, {
      data: this.subject,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
