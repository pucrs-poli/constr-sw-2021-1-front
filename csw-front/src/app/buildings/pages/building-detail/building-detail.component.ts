import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BindingFlags } from '@angular/compiler/src/core';
import { BindingType } from '@angular/compiler';
import { RoomComponent } from '../room/room.component';
import { BuildingEditComponent } from '../building-edit/building-edit.component';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css'],
})
export class BuildingDetailComponent implements OnInit {
  static building = {
    floors: 0,
    name: '',
    description: '',
    maxCapacity: 0,
    id: '',
  };
  id: string;
  rooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

  constructor(
    protected router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.id = data.id;
    });
    this.startValues();
  }

  startValues(): void {
    var v1 = document.getElementById(
      'building-detail-title'
    ) as HTMLInputElement;
    var v2 = document.getElementById(
      'building-detail-capacity-input'
    ) as HTMLInputElement;
    var v3 = document.getElementById(
      'building-detail-floors-input'
    ) as HTMLInputElement;
    var v4 = document.getElementById(
      'building-detail-description-input'
    ) as HTMLInputElement;

    v1.innerHTML = BuildingDetailComponent.building.name;
    v2.value = BuildingDetailComponent.building.maxCapacity.toString();
    v3.value = BuildingDetailComponent.building.floors.toString();
    v4.value = BuildingDetailComponent.building.description;
  }
  showRoom(id: string) {
    RoomComponent.room.Number = parseInt(id);
    RoomComponent.room.building = 3;
    RoomComponent.room.capacity = 3;
    RoomComponent.room.description = id;
    RoomComponent.room.type = 'teste1';
    this.router.navigateByUrl('room', { state: { id } }).then((r) => null);
  }

  createRoom() {
    this.router
      .navigateByUrl('room_create', { state: { id: 1 } })
      .then((r) => null);
  }

  editRoom(link: string) {
    this.router
      .navigateByUrl('room_edit', { state: { id: 1 } })
      .then((r) => null);
  }

  deleteRoom(event: Event) {
    alert(`Você deletou Sala 1.`);
  }
  createBuilding() {
    this.router.navigateByUrl('create').then((r) => null);
  }
  editBuilding() {

        BuildingEditComponent.building.name=BuildingDetailComponent.building.name;
        BuildingEditComponent.building.description=BuildingDetailComponent.building.description;
        BuildingEditComponent.building.floors=BuildingDetailComponent.building.floors;
        BuildingEditComponent.building.maxCapacity=BuildingDetailComponent.building.maxCapacity;
        BuildingEditComponent.building.id=BuildingDetailComponent.building.id;

      this.router.navigateByUrl('edit', { state: { id: 1 } }).then((r) => null);
  }
}
