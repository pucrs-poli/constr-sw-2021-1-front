import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BindingFlags } from '@angular/compiler/src/core';
import { BindingType } from '@angular/compiler';
import { RoomComponent } from '../room/room.component';
import { BuildingEditComponent } from '../building-edit/building-edit.component';
import { HttpClient } from '@angular/common/http';
import { api } from '../../api';
import { RoomEditComponent } from '../room-edit/room-edit.component';
import { building } from '../../types';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css'],
})
export class BuildingDetailComponent implements OnInit {
  rooms: {id,number,buildingID,description,maxCapacity,type}[];

  static building = {
    floors: 0,
    name: '',
    description: '',
    maxCapacity: 0,
    id: '',
  };


  constructor(protected router: Router, private activatedRoute: ActivatedRoute, public http: HttpClient,public ref: ChangeDetectorRef) {
    api.getAllRooms(this.http);
    setTimeout(() => {
      this.getRooms()
      ref.detectChanges();
    }, 700);
  }

  getRooms() {
    this.rooms = new Array<{id,number,buildingID,description,maxCapacity,type}>();
    api.rooms.forEach(element => {
      if (element.buildingID==BuildingDetailComponent.building.id){
         this.rooms.push({id:element._id, number:element.number,buildingID:element.buildingID,
          description:element.description,maxCapacity:element.maxCapacity,type:element.type});
         }
    });

console.log(this.rooms)

    }
  ngOnInit(): void {
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
    this.rooms.forEach(element => {
      if (element.id==id){
        RoomComponent.room.number = element.number;
        RoomComponent.room.buildingID = element.buildingID;
        RoomComponent.room.maxCapacity = element.maxCapacity;
        RoomComponent.room.description = element.description;
        RoomComponent.room.type = element.type;
        RoomComponent.room._id = element.id;
      }
    });

    this.router.navigateByUrl('room', { state: { id } }).then((r) => null);
  }

  createRoom() {
    RoomEditComponent.room.buildingID=BuildingDetailComponent.building.id;
    this.router
      .navigateByUrl('room_create', { state: { id: 1 } })
      .then((r) => null);
  }

  editRoom(id: string) {
    this.rooms.forEach(element => {
      if (element.id==id){
        console.log(RoomEditComponent.room)
        RoomEditComponent.room._id=element.id;
        RoomEditComponent.room.buildingID= element.buildingID;
        RoomEditComponent.room.description= element.description
        RoomEditComponent.room.maxCapacity = element.maxCapacity;
        RoomEditComponent.room.number= element.number;
        RoomEditComponent.room.type= element.type;
      }
    });

        this.router.navigateByUrl('room_edit', { state: { id: 1 } })
      .then((r) => null);
  }

  deleteRoom(id: string) {
    this.rooms.forEach(element => {
      if (element.id==id){
      api.deleteRoom(this.http,id)
      alert("Você deletou a sala: "+element.number);
      this.router.navigateByUrl('buildings', { state: { id } }).then((r) => null);
      }
    });


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
