import { Component, Input } from '@angular/core';
import { QuestionModel } from '../../../models/question.model';

@Component({
  selector: 'app-questions-expansion',
  templateUrl: './questions-expansion.component.html',
  styleUrls: ['./questions-expansion.component.css']
})
export class QuestionsExpansionComponent {

  @Input() questions: QuestionModel[];

}
