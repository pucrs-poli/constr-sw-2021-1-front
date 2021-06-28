import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEdicaoDisciplinaComponent } from './create-edicao-disciplina/create-edicao-disciplina.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { EditEdicaoDisciplinaComponent } from './edit-edicao-disciplina/edit-edicao-disciplina.component';
import { ListEdicaoDisciplinaComponent } from './list-edicao-disciplina/list-edicao-disciplina.component';
import { ListStudentsDisciplinaComponent } from './list-students-disciplina/list-students-disciplina.component';
import { ListStudentsDataComponent } from './list-students-data/list-students-data.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateEdicaoDisciplinaComponent,
    EditEdicaoDisciplinaComponent,
    ListEdicaoDisciplinaComponent,
    ListStudentsDisciplinaComponent,
    ListStudentsDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
