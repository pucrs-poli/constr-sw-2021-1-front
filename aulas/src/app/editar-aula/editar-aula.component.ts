import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-editar-aula',
    templateUrl: './editar-aula.component.html',
    styleUrls: ['./editar-aula.component.css']
})
export class EditarAulaComponent implements OnInit {
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
