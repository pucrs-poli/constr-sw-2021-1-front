import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { TestsComponent } from './tests/tests.component';
import { EvaluationsService } from './services/evaluations.service';
import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TestsComponent,
  ],
  imports: [
    EvaluationsRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    EvaluationsService,
  ]
})
export class EvaluationsModule { }
