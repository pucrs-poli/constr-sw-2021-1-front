import { Component, OnInit } from '@angular/core';

export interface StudentsDisiciplina {
  id: number;
  inscricao: string;
  ativo: boolean;
}

const ELEMENT_DATA: StudentsDisiciplina[] = [
  {id: 2021, inscricao: '05/01/2021',  ativo: true },
  {id: 2019, inscricao: '05/01/2019',  ativo: false },
  {id: 2022, inscricao: '05/01/2022',  ativo: false },
  {id: 2020, inscricao: '05/01/2020',  ativo: true },
  {id: 2018, inscricao: '05/01/2018',  ativo: false },
  {id: 2017, inscricao: '05/01/2017',  ativo: true },
  {id: 2016, inscricao: '05/01/2016',  ativo: true },
  {id: 2015, inscricao: '05/01/2015',  ativo: false },
  {id: 2014, inscricao: '05/01/2014',  ativo: false },
  {id: 2013, inscricao: '05/01/2013',  ativo: true },
];


@Component({
  selector: 'app-list-students-disciplina',
  templateUrl: './list-students-disciplina.component.html',
  styleUrls: ['./list-students-disciplina.component.css']
})
export class ListStudentsDisciplinaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'inscricao', 'ativo', 'visualizar', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
