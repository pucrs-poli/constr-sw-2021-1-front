import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  @Output() questionEmit: EventEmitter<QuestionModel> = new EventEmitter<QuestionModel>();
  @Output() questionDeleted: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      this.question.title = value.title;
      this.question.isOptional = value.isOptional;
      this.question.options = value.options;

      this.questionEmit.emit(this.question);
    });
  }

  onDeleted(){
    this.questionDeleted.emit();
  }

}
