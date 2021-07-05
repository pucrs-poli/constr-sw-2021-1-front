import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  item: any;

  constructor(protected router: Router) {
    console.log('didmount');
    //this.item = this.router.getCurrentNavigation().extras.state.item;
   }

  ngOnInit(): void {
  }

}
