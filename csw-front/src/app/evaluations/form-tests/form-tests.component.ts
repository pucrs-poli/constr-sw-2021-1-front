import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionModel } from '../models/question.model';

@Component({
  selector: 'app-form-tests',
  templateUrl: './form-tests.component.html',
  styleUrls: ['./form-tests.component.css']
})
export class FormTestsComponent implements OnInit {

  questions: QuestionModel[] = [];

  constructor(private dialogRef: MatDialogRef<FormTestsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String) {
   }

  ngOnInit(): void {
  }

  onClickAdd(){
    this.questions.push(new QuestionModel());
  }

  questionDeleted(index){
    this.questions.splice(index, 1);
  }

}
