import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-editar-aula',
    templateUrl: './editar-aula.component.html',
    styleUrls: ['./editar-aula.component.css']
})
export class EditarAulaComponent implements OnInit {
    aulaForm: FormGroup | any;
    nomeAula: any;
    cursos: any;
    cursosFormatados= "";
    atividadesFormatados= "";
    atividades: any;
    sala: any;

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

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

        this.route.queryParams.subscribe(params => this.nomeAula = params['nomeAula']);
        this.route.queryParams.subscribe(params => this.cursos = params['cursos']);
        this.route.queryParams.subscribe(params => this.atividades = params['atividades']);
        this.route.queryParams.subscribe(params => this.sala = params['sala']);
       
        for(var i=0; i< 3; i++){
            this.cursosFormatados += this.cursos[i] + ",";
        }

        for(var i=0; i< 3; i++){
            this.atividadesFormatados += this.atividades[i] + ",";
        }
      
        this.aulaForm = this.formBuilder.group({
            nome: this.nomeAula,
            curso:this.cursosFormatados,
            atividade: this.atividadesFormatados,
            sala: this.sala,
          });
    }

    ngOnInit(): void {
    }

}
