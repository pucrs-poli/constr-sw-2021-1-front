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

import { SharedModule } from '../shared/shared.module';
import { BuildingDetailComponent } from './pages/building-detail/building-detail.component';
import { RoomComponent } from './pages/room/room.component';
import { BuildingsListComponent } from './pages/buildings-list/buildings-list.component';
import { XComponent } from './x/x.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BuildingsRoutingModule } from './buildings-routing.module';
import { BuildingEditComponent } from './pages/building-edit/building-edit.component';
import { RoomEditComponent } from './pages/room-edit/room-edit.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    BuildingDetailComponent,
    RoomComponent,
    BuildingsListComponent,
    XComponent,
    BuildingEditComponent,
    RoomEditComponent,
  ],
  imports: [
    MatInputModule,
    BuildingsRoutingModule,
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
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BuildingsModule { }
