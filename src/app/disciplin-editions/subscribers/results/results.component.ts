import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultsModel } from 'src/app/disciplin-editions/models/results.model';
import { ResultsService } from '../../services/results.service';

const ELEMENT_DATA: ResultsModel[] = [
  {id: "P321", student_id: 1234, date:"2021-05-20", description: "Prova de matemática discreta", result: 9.3},
  {id: "P322", student_id: 1234, date:"2021-06-22", description: "Prova de cálculo", result: 8.3},
  {id: "P323", student_id: 1234, date:"2021-06-24", description: "Trabalho de programação distribuida", result: 9.0},
  {id: "P324", student_id: 1234, date:"2021-07-19", description: "Trabalho de fundamentos de programação", result: 10.0},
  {id: "P325", student_id: 1234, date:"2021-07-18", description: "Prova de estatistica", result: 7.5},
  {id: "P326", student_id: 1234, date:"2021-07-15", description: "Prova de matemática discreta", result: 7.3},
  {id: "P327", student_id: 1234, date:"2021-08-10", description: "Prova de mecânica fundamental", result: 5.5},
  {id: "P328", student_id: 1234, date:"2021-08-22", description: "Trabalho de programação paralela", result: 8.5},
  {id: "P329", student_id: 1234, date:"2021-08-20", description: "Prova de construção de software", result: 9.3},
  {id: "P320", student_id: 1234, date:"2021-09-10", description: "Prova de programação", result: 5.3},
];

@Component({
  selector: 'app-tests',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  dataSource: ResultsModel[];

  constructor(protected evaluationService: ResultsService, protected router: Router) { }

  ngOnInit() {
    // this.id = this.dataSource[1].id;
    // this.student_id = this.dataSource[1].student_id;
    // this.sub_date = this.dataSource[1].sub_date;
    // this.active = this.dataSource[1].active;

    this.dataSource = ELEMENT_DATA;
  }

  // onClickCreate() {
  //   this.router.navigateByUrl("/create");
  // }

  // onClickSubscribes(item){
  //   this.router.navigateByUrl(`/results/${item}`, { state: { dataSource: this.dataSource, item: item } });
  // }

  // onClickEdit(item){
  //   const itemSelected = this.dataSource.find(i => i.id === item);
  //   this.router.navigateByUrl(`/edit/${item}`, { state: { dataSource: this.dataSource, item: itemSelected } });
  // }

  // onClickDelete(){ }
}

