import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { EditResourcePageComponent } from './pages/edit-resource-page/edit-resource-page.component';
import { EditReservationPageComponent } from './pages/edit-reservation-page/edit-reservation-page.component';
import { AddResourcePageComponent } from './pages/add-resource-page/add-resource-page.component';
import { AddTypePageComponent } from './pages/add-type-page/add-type-page.component';

const routes: Routes = [
    {
      path: '',
      component: ResourcesPageComponent,
    },
    {
      path: 'edit/:id',
      component: EditResourcePageComponent
    },
    {
      path: 'new',
      component: AddResourcePageComponent
    },
    {
      path: 'new_type',
      component: AddTypePageComponent
    },
    {
      path: 'reservations/edit/:id',
      component: EditReservationPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourcesRoutingModule{}
