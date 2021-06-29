import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  openedSideNav = false;

  constructor(protected router: Router){
  }

  onClick(){
    this.openedSideNav = !this.openedSideNav;
  }

  navigateToHomePage(){
    this.router.navigate(['/home']);
  }
}
