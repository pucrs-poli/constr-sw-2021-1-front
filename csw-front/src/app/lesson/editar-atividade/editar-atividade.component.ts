import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-atividade',
  templateUrl: './editar-atividade.component.html',
  styleUrls: ['./editar-atividade.component.css']
})
export class EditarAtividadeComponent implements OnInit {
  atividadeForm: FormGroup | any;
  lessonID: any;
  name: any;
  description: any;
  grade: any;
  finalDate: any;
  status: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {

    this.route.queryParams.subscribe(params => this.lessonID = params['lessonID']);
    this.route.queryParams.subscribe(params => this.name = params['name']);
    this.route.queryParams.subscribe(params => this.description = params['description']);
    this.route.queryParams.subscribe(params => this.grade = params['grade']);
    this.route.queryParams.subscribe(params => this.finalDate = params['finalDate']);
    this.route.queryParams.subscribe(params => this.status = params['status']);

   }

  ngOnInit(): void {
    this.atividadeForm = this.formBuilder.group({
      lessonID: this.lessonID,
      name: this.name,
      description: this.description,
      grade: this.grade,
      finalDate: this.finalDate,
      status:  this.status,
    });
  }

}
