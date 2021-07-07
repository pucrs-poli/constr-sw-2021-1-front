import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
//  names: string[]= ['teste'] ;
buildings: {id,name,capacity,type}[] ;

  constructor(protected router: Router, public http: HttpClient,public ref: ChangeDetectorRef) {
    api.getAllBuilding(this.http);
    setTimeout(() => {
      this.getBuildings()
      ref.detectChanges();
    }, 700);

  }

  ngOnInit() {

  }
  getBuildings() {
    this.buildings = new Array<{id,name,capacity,type}>();
    api.buildings.forEach(element => {
      this.buildings.push({id:element._id, name:element.name,capacity: element.maxCapacity,type:element.description});
    });

console.log(this.buildings)

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

  deleteBuilding(event: Event, id: string, name: string) {
    api.delete(this.http,id);
    alert(name+" removido com sucesso");

  }
}
