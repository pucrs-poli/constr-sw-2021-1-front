import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatList } from '@angular/material/list';
import { Router } from '@angular/router';
import { find } from 'rxjs/operators';
import { api } from '../../api';
import { building } from '../../types';
import { BuildingDetailComponent } from '../building-detail/building-detail.component';
import { BuildingEditComponent } from '../building-edit/building-edit.component';

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.css'],
})
export class BuildingsListComponent implements AfterViewInit, OnInit {
  // @ViewChild(MatList) table: MatTable<BuildingsListItem>;
  //  names: string[]= ['teste'] ;
  buildings: { id; name; capacity; type; floors }[];

  constructor(
    protected router: Router,
    public http: HttpClient,
    public ref: ChangeDetectorRef
  ) {
    api.getAllBuilding(this.http);
    setTimeout(() => {
      this.getBuildings();
      ref.detectChanges();
    }, 900);
  }

  ngOnInit() {}
  getBuildings() {
    this.buildings = new Array<{ id; name; capacity; type; floors }>();
    api.buildings.forEach((element) => {
      this.buildings.push({
        id: element._id,
        name: element.name,
        capacity: element.maxCapacity,
        type: element.description,
        floors: element.floors,
      });
    });

    console.log(this.buildings);
  }

  ngAfterViewInit() {}

  showBuilding(id: string) {
    this.buildings.forEach((element) => {
      if (element.id == id) {
        BuildingDetailComponent.building.name = element.name;
        BuildingDetailComponent.building.description = element.type;
        BuildingDetailComponent.building.floors = element.floors;
        BuildingDetailComponent.building.maxCapacity = element.capacity;
        BuildingDetailComponent.building.id = element.id;
      }
    });
    this.router.navigateByUrl('detail', { state: { id } }).then((r) => null);
  }

  createBuilding() {
    this.router.navigateByUrl('create').then((r) => null);
  }

  editBuilding(id: string) {
    this.buildings.forEach((element) => {
      if (element.id == id) {
        BuildingEditComponent.building.name = element.name;
        BuildingEditComponent.building.description = element.type;
        BuildingEditComponent.building.floors = element.floors;
        BuildingEditComponent.building.maxCapacity = element.capacity;
        BuildingEditComponent.building.id = element.id;
      }
    });
    this.router.navigateByUrl('edit', { state: { id: 1 } }).then((r) => null);
  }

  deleteBuilding(id: string, name: string) {
    api.deleteBuilding(this.http, id);
    alert(name + ' removido com sucesso');
  }
}
