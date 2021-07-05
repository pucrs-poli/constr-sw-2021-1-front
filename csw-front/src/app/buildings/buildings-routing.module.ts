import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BuildingDetailComponent} from './pages/building-detail/building-detail.component';
import {RoomComponent} from './pages/room/room.component';
import {BuildingsListComponent} from './pages/buildings-list/buildings-list.component';
import {XComponent} from './x/x.component';
import { BuildingEditComponent } from './pages/building-edit/building-edit.component';
import { RoomEditComponent } from './pages/room-edit/room-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingsListComponent,
  },
  {
    path: 'building/:id',
    component: BuildingDetailComponent,
  },
  {
    path: 'building/:id/room/:id',
    component: RoomComponent,
  },
  {
    path: 'x',
    component: XComponent,
  },
  { path: 'edit', component: BuildingEditComponent },
  { path: 'room/edit', component: RoomEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingsRoutingModule {
}
