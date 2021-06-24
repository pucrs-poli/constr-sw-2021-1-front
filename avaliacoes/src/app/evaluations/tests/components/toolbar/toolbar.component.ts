import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  openedSideNav = false;

  onClick(){
    this.openedSideNav = !this.openedSideNav;
  }
}
