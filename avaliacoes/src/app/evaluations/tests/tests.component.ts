import { Component, OnInit } from '@angular/core';
import { TestModel } from '../models/test.model';
import { EvaluationsService } from '../services/evaluations.service';

const ELEMENT_DATA: TestModel[] = [
  {id: '1', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 4, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}], results:[{id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}, {id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}]},
  {id: '4', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 3, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}], results:[{id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}, {id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}]},
  {id: '5', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 5, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?", options: ['oi', 'tchau', 'mais uma opcao']},{id:"60ca86b97f284554105a3123",title:"Quanto é 1 + 2?"}], results:[{id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}, {id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}]},
  {id: '6', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 1, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}], results:[{id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}, {id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}]},
  {id: '7', subjects: ['Web Development','Design Patterns','Logic and Computation','Verification and Validation','Project Management'], weight: 8, questions:[{id:"60ca86b97f284554105a2101",title: "Qual a raiz quadrada de 2?"},{id:"60ca86b97f284554105a2100",title:"Quanto é 1 + 1?"}], results:[{id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}, {id: "d290f1ee-6c54-4b01-90e6-d701748f0851",note: 9,studentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",testId: "d290f1ee-6c54-4b01-90e6-d701748f0851"}]},
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
