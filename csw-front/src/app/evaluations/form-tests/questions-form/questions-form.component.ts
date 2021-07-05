import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { title } from 'process';
import { QuestionModel } from '../../models/question.model';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {

  question = new QuestionModel();
  
  form = new FormGroup({
    title: new FormControl(''),
    isOptional: new FormControl(false),
    options: new FormControl(''),
  });

  @Output() questionEmit: EventEmitter<QuestionModel> = new EventEmitter();
  @Output() questionDeleted: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(''),
      isOptional: new FormControl(false),
      options: new FormControl(''),
    });
   }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      this.form.controls['title'].setValue(value.title);
      this.form.controls['isOptional'].setValue(value.isOptional);
      this.form.controls['options'].setValue(value.options);

      this.question.title = this.form.controls['title'].value;
      this.question.isOptional = this.form.controls['isOptional'].value;
      this.question.options = this.form.controls['options'].value;

      this.questionEmit.emit(this.question);
    });
  }

  onDeleted(){
    this.questionDeleted.emit();
  }

}
