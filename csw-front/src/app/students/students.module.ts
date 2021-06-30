import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';


import {StudentsRoutingModule} from './students-routing.module';
import {StudentsComponent} from './pages/students-page/students.component';
import {SharedModule} from '../shared/shared.module';
import {StudentTableComponent} from './components/students-table/student-table.component';
import {EditStudentPageComponent} from './pages/edit-student-page/edit-student-page.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentTableComponent,
    EditStudentPageComponent
  ],
  imports: [
    StudentsRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StudentsModule { }
