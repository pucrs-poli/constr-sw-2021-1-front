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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CreateStudentPageComponent} from './pages/create-student-page/create-student-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {SubscriptionsTableComponent} from './components/subscriptions-table/subscriptions-table.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentTableComponent,
    EditStudentPageComponent,
    CreateStudentPageComponent,
    SubscriptionsTableComponent
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StudentsModule { }
