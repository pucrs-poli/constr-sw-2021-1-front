import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEdicaoDisciplinaComponent } from './create-edicao-disciplina/create-edicao-disciplina.component';
import { EditEdicaoDisciplinaComponent } from './edit-edicao-disciplina/edit-edicao-disciplina.component';
import { ListEdicaoDisciplinaComponent } from './list-edicao-disciplina/list-edicao-disciplina.component';
import { ListStudentsDataComponent } from './list-students-data/list-students-data.component';
import { ListStudentsDisciplinaComponent } from './list-students-disciplina/list-students-disciplina.component';

const routes: Routes = [
  { path: 'create-edicao', component: CreateEdicaoDisciplinaComponent },
  { path: 'edit-edicao', component: EditEdicaoDisciplinaComponent },
  { path: 'list-edicao', component: ListEdicaoDisciplinaComponent },
  { path: 'list-students-data', component: ListStudentsDataComponent },
  { path: 'list-students', component: ListStudentsDisciplinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
