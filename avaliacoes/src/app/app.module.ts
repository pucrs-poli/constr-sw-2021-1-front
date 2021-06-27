import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { EvaluationsModule } from './evaluations/evaluations.module';

import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    EvaluationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
