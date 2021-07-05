import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  item: any;

  constructor(protected router: Router) {
    console.log('didmount');
    //this.item = this.router.getCurrentNavigation().extras.state.item;
   }

  ngOnInit(): void {
  }

  onClickMenu() {
    this.router.navigateByUrl("disciplin-editions");
  }

}
