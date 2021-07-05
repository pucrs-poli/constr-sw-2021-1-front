import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EdicaoDisciplinaComponent } from "./tests/edicao-disciplina.component";
import { EditFormComponent } from "./edit-form/edit-form.component";

const routes: Routes = [
    {
        path: '',
        component: EdicaoDisciplinaComponent,
    },
    {
        path: 'edit',
        component: EditFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DisciplinEditionRoutingModule{}
