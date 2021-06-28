import { Component, OnInit } from '@angular/core';


export interface Students {
  id: number;
  data: string;
  descricao: string;
  nota: number;
}

const ELEMENT_DATA: Students[] = [
  {id: 511205211, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 201232119, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 202132122, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 552012320, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 212314018, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 896278017, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 423126016, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 532413015, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 542352014, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
  {id: 223432013, data: '20/02/2020', descricao: 'Teste', nota: 9.5 },
];

@Component({
  selector: 'app-list-students-data',
  templateUrl: './list-students-data.component.html',
  styleUrls: ['./list-students-data.component.css']
})

export class ListStudentsDataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'data', 'descricao', 'nota'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
