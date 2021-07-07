import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { api } from '../../api';


@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.css'],
})
export class BuildingEditComponent implements OnInit {

  value = 'teste';
  building = {
    id: 0,
    name: '',
    capacity: 0,
    floors: 0,
    description: '',
  };
  building2 ={
    floors: 235,
    name: "Prédio 125",
    description: "Escola Politécnica da PUCRS",
    maxCapacity: 3500
  }
  constructor(public http: HttpClient) {
    this.building.id = 0;
    this.building.name = '';
    this.building.capacity = 0;
    this.building.floors = 0;
    this.building.description = '';
  }

  ngOnInit(): void {

  }
  changeName(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.name = element.value;
  }

  changeCapacity(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.capacity = +element.value;
  }
  changeFloors(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.floors = +element.value;
  }
  changeDescription(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.building.description = element.value;
  }
  clickButton() {
    console.log(this.building);
  }
  clickButton2() {
    //  api.getAllBuilding(this.http);
  // api.save(this.http,this.building2);
 //   api.delete(this.http,'60e4eea01b094f0029814223');
// api.update(this.http,'60e4e6901b094f00298141d9',this.building2);

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
