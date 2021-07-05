import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css'],
})
export class RoomEditComponent implements OnInit {
  static room = {
    id: 0,
    BuildingID: 0,
    Number: 0,
    Description: '',
    MaxCapacity: 0,
    Type: '',
  };
  constructor() {}

  ngOnInit(): void {
    this.startValues();
  }
  startValues(): void {
    console.log(RoomEditComponent.room)
    var v1 = window.document.getElementById('room-number-input') as HTMLInputElement;
    var v2 = document.getElementById('room-capacity-input') as HTMLInputElement;
    var v3 = document.getElementById('room-building-input' ) as HTMLInputElement;
    var v4 = window.document.getElementById('room-type-input') as HTMLInputElement;
    v1.value= RoomEditComponent.room.Number.toString();
    v2.value= RoomEditComponent.room.MaxCapacity.toString();
    v3.value= RoomEditComponent.room.BuildingID.toString();
    v4.value= RoomEditComponent.room.Type;
  }
  changeNumber(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.Number = +element.value;
  }
  changeBuilding(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.BuildingID = +element.value;
  }
  changeCapacity(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.MaxCapacity = +element.value;
  }
  changeType(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    RoomEditComponent.room.Type = element.value;
  }

  clickButton() {
    console.log(RoomEditComponent.room);
  }
  clear(type: String): void {
    var s;
    if (type == 'room-number-input') {
      s = window.document.getElementById('room-number-input') as HTMLInputElement;
    } else if (type == 'room-capacity-input') {
      s = window.document.getElementById('room-capacity-input') as HTMLInputElement;
    } else if (type == 'room-building-input') {
      s = window.document.getElementById('room-building-input') as HTMLInputElement;
    } else if (type == 'room-type-input') {
      s = window.document.getElementById('room-type-input') as HTMLInputElement;
    }
    s.value = '';
  }
}
