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


static  building ={
    floors: 0,
    name: "",
    description: "",
    maxCapacity: 0
  }
  constructor(public http: HttpClient,protected router: Router) {

  }

  ngOnInit(): void {

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
console.log(BuildingEditComponent.building)
api.save(this.http,BuildingEditComponent.building);
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
