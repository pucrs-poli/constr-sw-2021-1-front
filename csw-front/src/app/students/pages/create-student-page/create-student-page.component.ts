import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-student-page',
  templateUrl: './create-student-page.component.html',
  styleUrls: ['./create-student-page.component.css']
})
export class CreateStudentPageComponent implements OnInit {
  readonly apiURL: string;
  studentForm: FormGroup;

  constructor(private http: HttpClient, private location: Location) {
    this.apiURL = 'http://ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api';
    this.studentForm = new FormGroup({
      name: new FormControl(),
      cpf: new FormControl(),
      birthDate: new FormControl(),
      address: new FormControl()
    });
  }

  // tslint:disable-next-line:typedef
  back() {
    this.location.back();
  }

  // tslint:disable-next-line:typedef
  save() {
    this.http.post(`${ this.apiURL }/students`, this.studentForm.value)
      .subscribe((result: any) => {
        alert('Aluno criado com sucesso!');
        location.reload();
      });
  }

  ngOnInit(): void { }

}
