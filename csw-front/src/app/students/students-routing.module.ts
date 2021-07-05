import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StudentsComponent} from './pages/students-page/students.component';
import {EditStudentPageComponent} from './pages/edit-student-page/edit-student-page.component';
import {CreateStudentPageComponent} from './pages/create-student-page/create-student-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
  },
  {
    path: 'edit/:id',
    component: EditStudentPageComponent
  },
  {
    path: 'create',
    component: CreateStudentPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule{}
