import { Component, OnInit } from '@angular/core';

export interface EdicaoDisciplina {
  semestre: number;
  ano: number;
  descricao: string;
}

const ELEMENT_DATA: EdicaoDisciplina[] = [
  {ano: 2021, semestre: 1,  descricao: 'P1' },
  {ano: 2019, semestre: 2,  descricao: 'P2' },
  {ano: 2022, semestre: 1,  descricao: 'P3' },
  {ano: 2020, semestre: 2,  descricao: 'P2' },
  {ano: 2018, semestre: 2,  descricao: 'P1' },
  {ano: 2017, semestre: 1,  descricao: 'P3' },
  {ano: 2016, semestre: 2,  descricao: 'P1' },
  {ano: 2015, semestre: 1,  descricao: 'P2' },
  {ano: 2014, semestre: 2,  descricao: 'P2' },
  {ano: 2013, semestre: 1,  descricao: 'P1' },
];

@Component({
  selector: 'app-list-edicao-disciplina',
  templateUrl: './list-edicao-disciplina.component.html',
  styleUrls: ['./list-edicao-disciplina.component.css']
})
export class ListEdicaoDisciplinaComponent implements OnInit {
  displayedColumns: string[] = ['ano', 'semestre', 'estudantes', 'descricao', 'visualizar', 'editar', 'excluir'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

