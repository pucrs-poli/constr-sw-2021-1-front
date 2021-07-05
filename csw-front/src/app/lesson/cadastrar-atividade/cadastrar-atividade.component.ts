import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-atividade',
  templateUrl: './cadastrar-atividade.component.html',
  styleUrls: ['./cadastrar-atividade.component.css']
})
export class CadastrarAtividadeComponent implements OnInit {
  atividadeForm: FormGroup | any;
  valuelessonID: any;
  valueName: any;
  valueDescription: any;
  valueGrade: any;
  valueFinalDate: any;
  valueStatus: any;

  constructor(private formBuilder: FormBuilder) {
    this.atividadeForm = this.formBuilder.group({
      lessonID: [''],
      name: [''],
      description: [''],
      grade: [''],
      finalDate: [''],
      status: [''],
    });
   }

  ngOnInit(): void {
  }

}
