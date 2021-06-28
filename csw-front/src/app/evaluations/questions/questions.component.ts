import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionModel } from '../models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  panelOpenState = false;
  name: string = '';
  questions: QuestionModel[];

  constructor(protected router: Router) {
    this.name = this.router.getCurrentNavigation().extras.state.name;
    this.questions =  this.router.getCurrentNavigation().extras.state.questions;
  }
}
