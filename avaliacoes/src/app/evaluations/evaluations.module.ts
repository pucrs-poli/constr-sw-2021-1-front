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

import { TestsComponent } from './tests/tests.component';
import { EvaluationsService } from './services/evaluations.service';
import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';
import { TestTableComponent } from './test/components/test-table/test-table.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    TestsComponent,
    DisciplinasTableComponent,
    TestComponent,
    TestTableComponent,
    ResultsComponent,
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
  ],
  providers: [
    EvaluationsService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EvaluationsModule { }
