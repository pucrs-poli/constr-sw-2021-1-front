import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatNativeDateModule} from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';

import { EvaluationsModule } from './evaluations/evaluations.module';
import { StudentsModule } from './students/students.module';
import { LessonModule } from './lesson/lesson.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BuildingsModule} from './buildings/buildings.module';

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
    BuildingsModule,
    StudentsModule,
    SharedModule,
    RouterModule,
    LessonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule
    MatSortModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
