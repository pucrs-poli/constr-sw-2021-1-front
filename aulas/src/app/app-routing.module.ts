import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemAulasComponent } from './listagem-aulas/listagem-aulas.component';
import { EditarAulaComponent } from './editar-aula/editar-aula.component';

const routes: Routes = [
    { path: "listagem-aulas", component: ListagemAulasComponent },
    { path: "editar-aula", component: EditarAulaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
