import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResourceTableComponent } from './components/resource-table/resource-table.component';
import { ResourceTabsComponent } from './components/resource-tabs/resource-tabs.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceTableComponent,
    ResourceTabsComponent,
    ReservationTableComponent,
    ResourcesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
