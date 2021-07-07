import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../../api';
import { room } from '../../types';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css'],
})
export class RoomEditComponent implements OnInit {
  static room = {
    number: 0,
    buildingID: '',
    description: '',
    maxCapacity: 0,
    type: '',
  } as room;
  constructor(public http: HttpClient, protected router: Router) {}

  ngOnInit(): void {
    this.startValues();
  }
  startValues(): void {
    console.log(RoomEditComponent.room);
    var v1 = window.document.getElementById(
      'room-number-input'
    ) as HTMLInputElement;
    var v2 = document.getElementById('room-capacity-input') as HTMLInputElement;
    var v3 = document.getElementById(
      'room-description-input'
    ) as HTMLInputElement;
    var v4 = window.document.getElementById(
      'room-type-input'
    ) as HTMLInputElement;
    v1.value = RoomEditComponent.room.number.toString();
    v2.value = RoomEditComponent.room.maxCapacity.toString();
    v3.value = RoomEditComponent.room.description.toString();
    v4.value = RoomEditComponent.room.type;
  }
  changeNumber(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.number = +element.value;
  }
  changeDescription(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.description = element.value;
  }
  changeCapacity(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.maxCapacity = +element.value;
  }
  changeType(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.type = element.value;
  }

  clickButton() {
    console.log(RoomEditComponent.room);

    if (this.router.url == '/room_create') {
      console.log(this.router.url);
      api.saveRoom(this.http, RoomEditComponent.room);
    } else {
      api.updateRoom(
        this.http,
        RoomEditComponent.room._id,
        RoomEditComponent.room
      );
    }
    this.router.navigateByUrl('buildings').then((r) => null);
  }
  clear(type: String): void {
    var s;
    if (type == 'room-number-input') {
      s = window.document.getElementById(
        'room-number-input'
      ) as HTMLInputElement;
    } else if (type == 'room-capacity-input') {
      s = window.document.getElementById(
        'room-capacity-input'
      ) as HTMLInputElement;
    } else if (type == 'room-description-input') {
      s = window.document.getElementById(
        'room-description-input'
      ) as HTMLInputElement;
    } else if (type == 'room-type-input') {
      s = window.document.getElementById('room-type-input') as HTMLInputElement;
    }
    s.value = '';
  }
}
