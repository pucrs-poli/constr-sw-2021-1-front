import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() showSideNav = false;

  selectedButton: string = '';

  constructor(protected router: Router){}

  onSelect(feature: string): void {
    this.selectedButton = feature;
    this.router.navigate([`/${feature}`]);
  }
}