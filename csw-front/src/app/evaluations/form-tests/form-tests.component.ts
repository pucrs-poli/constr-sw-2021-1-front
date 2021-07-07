import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionModel } from '../models/question.model';
import { TestModel } from '../models/test.model';

@Component({
  selector: 'app-form-tests',
  templateUrl: './form-tests.component.html',
  styleUrls: ['./form-tests.component.css']
})
export class FormTestsComponent implements OnInit {

  test: TestModel = new TestModel();

  questions: QuestionModel[] = [];

  weight = 0;
  duration = 0;

  constructor(private dialogRef: MatDialogRef<FormTestsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String) {
  }

  ngOnInit(): void {
  }

  onClickAdd() {
    this.questions.push(new QuestionModel());
  }

  questionDeleted(index: number) {
    this.questions.splice(index, 1);
  }

  createTest(): TestModel{
    this.test.duration = this.duration;
    this.test.weight = this.weight;
    this.test.questions = this.questions;

    return this.test;
  }

  receiveQuestion(event: QuestionModel, i: number) {
    this.questions[i] = event;
  }
}
