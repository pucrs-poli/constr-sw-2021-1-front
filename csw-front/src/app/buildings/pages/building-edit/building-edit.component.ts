import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.css'],
})
export class BuildingEditComponent implements OnInit {
  apiURL = 'http://ec2-3-141-6-156.us-east-2.compute.amazonaws.com/api/';
  value = 'teste';
  building = {
    id: 0,
    name: '',
    capacity: 0,
    floors: 0,
    description: '',
  };
  building2 ={
    floors: 15,
    name: "Prédio 345",
    description: "Escola Politécnica da PUCRS",
    maxCapacity: 2000
  }
  constructor(public http: HttpClient) {
    this.building.id = 0;
    this.building.name = '';
    this.building.capacity = 0;
    this.building.floors = 0;
    this.building.description = '';
  }

  ngOnInit(): void {
    this.getAllBuilding();
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
   // this.save()
  // this.getAllBuilding();
  // this.delete('60e4e69e1b094f00298141dd');
  this.update('60e4e6901b094f00298141d9');
    //GET
  }
  getAllBuilding() {
    console.log(`${this.apiURL}buildings/all`);
    this.http.get(`${this.apiURL}buildings/all`).subscribe((result: any) => {
      console.log(result);
    });
  }
  save() {
    this.http.post(`${ this.apiURL }/buildings`, this.building2)
      .subscribe((result: any) => {
           //location.reload();
      });
      this.getAllBuilding();
  }
  delete(id:string){
    this.http.delete(`${ this.apiURL }/buildings/${id}`)
    .subscribe((result: any) => {
      location.reload();
 });

  }
  update(id:string){
    this.http.put(`${ this.apiURL }/buildings/${id}`,this.building2)
    .subscribe((result: any) => {
      location.reload();
 });
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
