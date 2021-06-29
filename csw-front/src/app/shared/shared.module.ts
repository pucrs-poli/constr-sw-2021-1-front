import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

@NgModule({
  declarations: [
    SideNavComponent,
    ToolbarComponent,
    PrimaryButtonComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    SideNavComponent,
    ToolbarComponent,
    PrimaryButtonComponent,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
  ],
})
export class SharedModule { }
