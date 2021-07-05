import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EdicaoDisciplinaComponent } from "./tests/edicao-disciplina.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { CreateFormComponent } from "./create-form/create-form.component";
import { SubscribersComponent} from './subscribers/subscribers.component';
import { ResultsComponent} from './subscribers/results/results.component';

const routes: Routes = [
  {
      path: '',
      component: EdicaoDisciplinaComponent,
  },
  {
      path: 'edit/:id',
      component: EditFormComponent,
  },
  {
      path: 'create',
      component: CreateFormComponent,
  },
  {
    path: 'subscribers/:id',
    component: SubscribersComponent,
  },
  {
    path: 'subscribers/:id/results',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinEditionRoutingModule{}
