import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatList} from '@angular/material/list';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.css']
})
export class BuildingsListComponent implements AfterViewInit, OnInit {
  // @ViewChild(MatList) table: MatTable<BuildingsListItem>;
  items = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
  ];

  constructor(protected router: Router,
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  showBuilding(id: string) {
    this.router
      .navigateByUrl('detail', {state: {id}})
      .then(r => null);
  }

  createBuilding() {
    this.router
      .navigateByUrl('create')
      .then(r => null);
  }

  editBuilding(link: string) {
    this.router
      .navigateByUrl('edit', {state: {id: 1}})
      .then(r => null);
   }

  deleteBuilding(event: Event){
    alert(`Você deletou Prédio 1.`);
  }
}
