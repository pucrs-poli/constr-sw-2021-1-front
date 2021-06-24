import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { TestsComponent } from './tests/tests.component';
import { EvaluationsService } from './services/evaluations.service';
import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { SideNavComponent } from './tests/components/side-nav/side-nav.component';
import { ToolbarComponent } from './tests/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    TestsComponent,
    SideNavComponent,
    ToolbarComponent,
  ],
  imports: [
    EvaluationsRoutingModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
  ],
  providers: [
    EvaluationsService,
  ]
})
export class EvaluationsModule { }
