import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatList} from '@angular/material/list';
import {Router} from '@angular/router';
import { api } from '../../api';

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.css']
})
export class BuildingsListComponent implements AfterViewInit, OnInit {
  // @ViewChild(MatList) table: MatTable<BuildingsListItem>;
  items = [

  ] as [];

  constructor(protected router: Router,public http: HttpClient
  ) {}

  ngOnInit() {
    console.log(api.getAllBuilding(this.http));
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
