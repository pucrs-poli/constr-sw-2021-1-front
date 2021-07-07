import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../../api';

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.css'],
})
export class BuildingEditComponent implements OnInit {
  static building = {
    floors: 0,
    name: '',
    description: '',
    maxCapacity: 0,
    id: '',
  };
  constructor(public http: HttpClient, protected router: Router) {}

  ngOnInit(): void {
    console.log(BuildingEditComponent.building);
    this.startValues();
  }

  startValues(): void {
    var v1 = document.getElementById('name-input') as HTMLInputElement;
    var v2 = document.getElementById('capacity-input') as HTMLInputElement;
    var v3 = document.getElementById('floor-input') as HTMLInputElement;
    var v4 = document.getElementById('description-input') as HTMLInputElement;

    v1.value = BuildingEditComponent.building.name;
    v2.value = BuildingEditComponent.building.maxCapacity.toString();
    v3.value = BuildingEditComponent.building.floors.toString();
    v4.value = BuildingEditComponent.building.description;
  }
  changeName(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    BuildingEditComponent.building.name = element.value;
  }

  changeCapacity(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    BuildingEditComponent.building.maxCapacity = +element.value;
  }
  changeFloors(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    BuildingEditComponent.building.floors = +element.value;
  }
  changeDescription(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    BuildingEditComponent.building.description = element.value;
  }
  clickButton() {
    console.log(BuildingEditComponent.building);
    if (this.router.url == '/create') {
      api.saveBuilding(this.http, BuildingEditComponent.building);
    } else {
      api.updateBuilding(
        this.http,
        BuildingEditComponent.building.id,
        BuildingEditComponent.building
      );
    }

    this.router.navigateByUrl('buildings').then((r) => null);
  }

  clear(type: string): void {
    let s;
    if (type === 'name-input') {
      s = window.document.getElementById('name-input') as HTMLInputElement;
    } else if (type === 'capacity-input') {
      s = window.document.getElementById('capacity-input') as HTMLInputElement;
    } else if (type === 'floor-input') {
      s = window.document.getElementById('floor-input') as HTMLInputElement;
    } else if (type === 'description-input') {
      s = window.document.getElementById(
        'description-input'
      ) as HTMLInputElement;
    }
    s.value = '';
  }
}
