import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemAulasComponent } from './listagem-aulas/listagem-aulas.component';
import { EditarAulaComponent } from './editar-aula/editar-aula.component';
import { CadastrarAulaComponent } from './cadastrar-aula/cadastrar-aula.component';
import { CadastrarAtividadeComponent } from './cadastrar-atividade/cadastrar-atividade.component';
import { ListagemAtividadeComponent } from './listagem-atividade/listagem-atividade.component';
import { EditarAtividadeComponent } from './editar-atividade/editar-atividade.component';

const routes: Routes = [
    { path: "listagem-aulas", component: ListagemAulasComponent },
    { path: "editar-aula", component: EditarAulaComponent },
    { path: "cadastrar-aula", component: CadastrarAulaComponent },
    { path: "cadastrar-atividade", component: CadastrarAtividadeComponent },
    { path: "listagem-atividade", component: ListagemAtividadeComponent },
    { path: "editar-atividade", component: EditarAtividadeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
