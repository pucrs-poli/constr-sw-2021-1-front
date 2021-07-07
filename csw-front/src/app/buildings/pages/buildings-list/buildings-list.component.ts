import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatList } from '@angular/material/list';
import { Router } from '@angular/router';
import { api } from '../../api';
import { building } from '../../types';

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.css'],
})
export class BuildingsListComponent implements AfterViewInit, OnInit {
  // @ViewChild(MatList) table: MatTable<BuildingsListItem>;
  names: string[]= [] ;
  constructor(protected router: Router, public http: HttpClient) {}

  ngOnInit() {
    api.getAllBuilding(this.http);
    setTimeout(this.getBuildings, 500);
  }
  getBuildings() {
    var a : string[] = [];
    api.buildings.forEach(element => {
      a.push(element.name);
    });


      this.names=a;
      console.log(this.names)
      /*]
   api.buildings.forEach(element => {
     var a : string;
     a =  element.name as string
    this.names.push("teste");
    });
*/
    }

  ngAfterViewInit() {}

  showBuilding(id: string) {
    this.router.navigateByUrl('detail', { state: { id } }).then((r) => null);
  }

  createBuilding() {
    this.router.navigateByUrl('create').then((r) => null);
  }

  editBuilding(link: string) {
    this.router.navigateByUrl('edit', { state: { id: 1 } }).then((r) => null);
  }

  deleteBuilding(event: Event) {
    alert(`Você deletou Prédio 1.`);
  }
}
