import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { DisciplinasTableComponent } from './tests/components/disciplinas-table/disciplinas-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { TestsComponent } from './tests/tests.component';
import { EvaluationsService } from './services/evaluations.service';
import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';
import { TestTableComponent } from './test/components/test-table/test-table.component';
import { ResultsComponent } from './results/results.component';
import { ResultsTableComponent } from './results/components/results-table/results-table.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsExpansionComponent } from './questions/components/questions-expansion/questions-expansion.component';
import { FormTestsComponent } from './form-tests/form-tests.component';
import { QuestionsFormComponent } from './form-tests/questions-form/questions-form.component';

@NgModule({
  declarations: [
    TestsComponent,
    DisciplinasTableComponent,
    TestComponent,
    TestTableComponent,
    ResultsComponent,
    ResultsTableComponent,
    QuestionsComponent,
    QuestionsExpansionComponent,
    FormTestsComponent,
    QuestionsFormComponent,
  ],
  imports: [
    EvaluationsRoutingModule,
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
    MatDialogModule,
    MatInputModule,
  ],
  providers: [
    EvaluationsService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EvaluationsModule { }
