import { Component, OnInit } from '@angular/core';
import { TestModel } from '../models/test.model';
import { EvaluationsService } from '../services/evaluations.service';

const ELEMENT_DATA: TestModel[] = [
  {id: '1', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 4, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}]},
  {id: '4', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 3, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}]},
  {id: '5', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 5, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"},{id:"60ca86b97f284554105a3123",title:"Quanto é 1 + 2?"}]},
  {id: '6', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 1, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}]},
  {id: '7', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 8, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}]},
];

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  tests: TestModel[];

  constructor(protected evaluationService: EvaluationsService) { }

  ngOnInit() {
    /* this.evaluationService.getAllTests().subscribe(
      (tests: TestModel[]) => this.tests = tests
    )
   */

    /* this.evaluationService.getApi().subscribe(
      (value) => console.log(value),
    ) */

    this.tests = ELEMENT_DATA;
  }

}
