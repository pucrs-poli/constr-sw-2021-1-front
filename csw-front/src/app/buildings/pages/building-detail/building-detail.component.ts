import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {BindingFlags} from '@angular/compiler/src/core';
import {BindingType} from '@angular/compiler';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrls: ['./building-detail.component.css']
})
export class BuildingDetailComponent implements OnInit {
  id: string;
  rooms = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
  ];

  constructor(protected router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.id = data.id;
    });
  }

  showRoom(id: string) {

      RoomComponent.room.Number=parseInt(id);
      RoomComponent.room.building=3;
      RoomComponent.room.capacity=3;
      RoomComponent.room.description=id;
      RoomComponent.room.type="teste1";
      this.router
      .navigateByUrl('room', {state: {id}})
      .then(r => null);
  }

  createRoom() {
    this.router
      .navigateByUrl('room_create', {state: {id: 1}})
      .then(r => null);
  }

  editRoom(link: string) {
    this.router
      .navigateByUrl('room_edit', {state: {id: 1}})
      .then(r => null);
  }

  deleteRoom(event: Event){
    alert(`Você deletou Sala 1.`);
  }

}
