import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResourceTableComponent } from './components/resource-table/resource-table.component';
import { ResourceTabsComponent } from './components/resource-tabs/resource-tabs.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceTableComponent,
    ResourceTabsComponent,
    ReservationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, ResourceTableComponent]
})
export class AppModule { }
