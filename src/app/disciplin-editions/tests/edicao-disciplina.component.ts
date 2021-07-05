import { Component, OnInit } from '@angular/core';
import { DisciplinEditionService } from '../services/disciplin-edition.service';
import { EdicaoDisciplinaModel } from '../models/edicaoDisciplina.model';


const ELEMENT_DATA: EdicaoDisciplinaModel[] = [
  {year: 2021, semester: '01',  id: 'P2132131', active: true, subscribers: [], version: 0 },
  {year: 2019, semester: '01',  id: 'P32', active: true, subscribers: [], version: 0 },
  {year: 2022, semester: '01',  id: '21321321P3', active: true, subscribers: [], version: 0 },
  {year: 2020, semester: '02',  id: 'Pewew2' ,active: true, subscribers: [], version: 0 },
  {year: 2018, semester: '02',  id: 'Pwewew1' ,active: true, subscribers: [], version: 0 },
  {year: 2017, semester: '01',  id: '423dsaasweP3', active: true, subscribers: [], version: 0 },
  {year: 2016, semester: '02',  id: 'Pewew1', active: true, subscribers: [], version: 0 },
  {year: 2015, semester: '01',  id: 'Pewqea2', active: true, subscribers: [], version: 0 },
  {year: 2014, semester: '02',  id: 'Pewea2', active: true, subscribers: [], version: 0 },
  {year: 2013, semester: '01',  id: 'Pwewe1', active: true, subscribers: [], version: 0 },
];

@Component({
  selector: 'app-tests',
  templateUrl: './edicao-disciplina.component.html',
  styleUrls: ['./edicao-disciplina.component.css']
})
export class EdicaoDisciplinaComponent implements OnInit {

  dataSource: EdicaoDisciplinaModel[];

  constructor(protected evaluationService: DisciplinEditionService) { }

  ngOnInit() {
    //this.DisciplinEditionService.getAllEditions().subscribe(
    //  (result: EdicaoDisciplinaModel[]) => this.dataSource = result
    //)


    /* this.DisciplinEditionService.getApi().subscribe(
      (value) => console.log(value),
    ) */
    this.dataSource = ELEMENT_DATA;
  }

}
