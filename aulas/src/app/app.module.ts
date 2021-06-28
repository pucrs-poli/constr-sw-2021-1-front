import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListagemAulasComponent } from './listagem-aulas/listagem-aulas.component';
import { EditarAulaComponent } from './editar-aula/editar-aula.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { CadastrarAulaComponent } from './cadastrar-aula/cadastrar-aula.component';
import { CadastrarAtividadeComponent } from './cadastrar-atividade/cadastrar-atividade.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListagemAtividadeComponent } from './listagem-atividade/listagem-atividade.component';
import { EditarAtividadeComponent } from './editar-atividade/editar-atividade.component';


@NgModule({
    declarations: [
        AppComponent,
        ListagemAulasComponent,
        EditarAulaComponent,
        CadastrarAulaComponent,
        CadastrarAtividadeComponent,
        ListagemAtividadeComponent,
        EditarAtividadeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        HttpClientModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
