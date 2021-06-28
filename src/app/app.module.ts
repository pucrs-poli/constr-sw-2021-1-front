import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import {RouterModule, Routes} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ResourceTableComponent } from './components/resource-table/resource-table.component';
import { ResourceTabsComponent } from './components/resource-tabs/resource-tabs.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditResourcePageComponent } from './pages/edit-resource-page/edit-resource-page.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'recursos', component: ResourcesPageComponent },
  { path: 'recursos/editar/:id', component: EditResourcePageComponent },
  { path: '**', component: HomePageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ResourceTableComponent,
    ResourceTabsComponent,
    ReservationTableComponent,
    ResourcesPageComponent,
    HomePageComponent,
    EditResourcePageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  bootstrap: [AppComponent, ResourceTableComponent]
})
export class AppModule { }

