import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-atividade',
  templateUrl: './listagem-atividade.component.html',
  styleUrls: ['./listagem-atividade.component.css']
})
export class ListagemAtividadeComponent implements OnInit {
  atividades: any = [];

  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/atividades.json").subscribe((data: any[]) => {
      this.atividades = data;
      console.log(this.atividades);
  })
  }

}
