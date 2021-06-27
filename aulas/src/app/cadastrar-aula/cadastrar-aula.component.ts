import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cadastrar-aula',
    templateUrl: './cadastrar-aula.component.html',
    styleUrls: ['./cadastrar-aula.component.css']
})
export class CadastrarAulaComponent implements OnInit {
    atividadesLista = [
        {
            "nomeAtividade": "Prova"
        },
        {
            "nomeAtividade": "T1"
        },
        {
            "nomeAtividade": "T2"
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
