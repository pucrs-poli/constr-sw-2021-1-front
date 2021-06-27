import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-listagem-aulas',
    templateUrl: './listagem-aulas.component.html',
    styleUrls: ['./listagem-aulas.component.css']
})
export class ListagemAulasComponent implements OnInit {
    aulas: any = [];

    constructor(
        private httpClient: HttpClient
    ) { }

    ngOnInit(): void {
        this.httpClient.get("assets/aulas.json").subscribe((data: any[]) => {
            this.aulas = data;
        })
    }

}
