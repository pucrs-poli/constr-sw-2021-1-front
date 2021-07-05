import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourceTableComponent } from './components/resource-table/resource-table.component';
import { ResourceTabsComponent } from './components/resource-tabs/resource-tabs.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { EditResourcePageComponent } from './pages/edit-resource-page/edit-resource-page.component';
import { EditReservationPageComponent } from './pages/edit-reservation-page/edit-reservation-page.component';

@NgModule({
  declarations: [
    ResourceTableComponent,
    ResourceTabsComponent,
    ReservationTableComponent,
    ResourcesPageComponent,
    EditResourcePageComponent,
    EditReservationPageComponent
  ],
  imports: [
    SharedModule,
    ResourcesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ResourcesModule { }
