import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomEditComponent } from '../room-edit/room-edit.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  static room = {
    Number: 0,
    building: 3,
    description: 'lalala',
    type: 'teste',
    capacity: 5,
  };
  constructor(protected router: Router) {

  }

  ngOnInit(): void {
    var k = Object.keys(RoomComponent.room);
    var v = Object.values(RoomComponent.room);
    for (var i =0; i<k.length;i++){
      if (i>0){
      this.startValues(k[i],v[i]);
    }else{
      this.startTitle(v[i]);
    }
    }
  }
  startTitle(value):void{
    let   v =  window.document.getElementById('title') as HTMLInputElement;
    v.innerHTML='Sala '+value.toString();
  }
  startValues(key,value): void{
    let   v =  window.document.getElementById(key+'-input-room') as HTMLInputElement;
    v.value=value.toString();
  }
  clickButton() : void {
    console.log('entrou')
    RoomEditComponent.room.BuildingID=RoomComponent.room.building;
    RoomEditComponent.room.Description=RoomComponent.room.description;
    RoomEditComponent.room.MaxCapacity=RoomComponent.room.capacity;
    RoomEditComponent.room.Number=RoomComponent.room.Number;
    RoomEditComponent.room.Type=RoomComponent.room.type;
    this.router
      .navigateByUrl('room_edit');
  }
}
