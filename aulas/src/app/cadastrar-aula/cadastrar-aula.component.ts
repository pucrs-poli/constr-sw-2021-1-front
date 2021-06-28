import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-cadastrar-aula',
    templateUrl: './cadastrar-aula.component.html',
    styleUrls: ['./cadastrar-aula.component.css']
})
export class CadastrarAulaComponent implements OnInit {
    aulaForm: FormGroup | any;
    valueName: any;
    valueCourse: any;
    valueActivity: any;
    valueRoom: any;
    
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

    constructor(private formBuilder: FormBuilder) {
        this.aulaForm = this.formBuilder.group({
            nome: [''],
            curso: [''],
            atividade: [''],
            sala: [''],
          });
     }

    ngOnInit(): void {
    }

}
