import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { room } from '../../types';
import { RoomEditComponent } from '../room-edit/room-edit.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  static room = {
    number: 0,
    buildingID: '',
    description: '',
    maxCapacity: 0,
    type: '',
    _id: '',
  } as room;
  constructor(protected router: Router) {}

  ngOnInit(): void {
    this.startValues();
  }
  startValues(): void {
    var v1 = document.getElementById('room-title-up') as HTMLInputElement;
    var v2 = document.getElementById('capacity-input-room') as HTMLInputElement;
    var v3 = document.getElementById('building-input-room') as HTMLInputElement;
    var v4 = document.getElementById('type-input-room') as HTMLInputElement;
    var v5 = document.getElementById(
      'description-input-room'
    ) as HTMLInputElement;
    v1.innerHTML = 'Sala ' + RoomComponent.room.number;
    v2.value = RoomComponent.room.maxCapacity.toString();
    v3.value = RoomComponent.room.buildingID.toString();
    v4.value = RoomComponent.room.type;
    v5.value = RoomComponent.room.description;
  }
  editRoom() {
    console.log(RoomComponent.room);
    RoomEditComponent.room._id = RoomComponent.room._id;
    RoomEditComponent.room.buildingID = RoomComponent.room.buildingID;
    RoomEditComponent.room.description = RoomComponent.room.description;
    RoomEditComponent.room.maxCapacity = RoomComponent.room.maxCapacity;
    RoomEditComponent.room.number = RoomComponent.room.number;
    RoomEditComponent.room.type = RoomComponent.room.type;

    this.router
      .navigateByUrl('room_edit', { state: { id: 1 } })
      .then((r) => null);
  }
}
