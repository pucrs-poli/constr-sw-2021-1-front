import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-student-page',
  templateUrl: './edit-student-page.component.html',
  styleUrls: ['./edit-student-page.component.css']
})
export class EditStudentPageComponent implements OnInit {
  idStudent;
  student;
  readonly apiURL: string;
  private studentForm: FormGroup;
  private subscriptionForm: FormGroup;

  constructor(private http: HttpClient, private location: Location, private activatedRoute: ActivatedRoute) {
    // tslint:disable-next-line:no-unused-expression
    this.activatedRoute.params.subscribe((res: any) => this.idStudent =  res.id);
    this.apiURL = 'http://ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api';
    this.studentForm = new FormGroup({
      name: new FormControl(),
      address: new FormControl()
    });
    this.subscriptionForm = new FormGroup({
      code: new FormControl(),
      edition: new FormControl()
    });
  }

  // tslint:disable-next-line:typedef
  back() {
    this.location.back();
  }

  // tslint:disable-next-line:typedef
  save() {
    this.student.name = this.studentForm.value.name;
    this.student.address = this.studentForm.value.address;
    this.http.put(`${ this.apiURL }/students`, this.student)
      .subscribe((result: any) => {
        alert('Aluno editado com sucesso!');
        location.reload();
      });
  }

  // tslint:disable-next-line:typedef
  subscribe() {
    // tslint:disable-next-line:max-line-length
    if (this.subscriptionForm.value.code === null || this.subscriptionForm.value.edition === null || this.subscriptionForm.value.code.length === 0 || this.subscriptionForm.value.edition.length === 0) {
      alert('Devem ser informados o Código e a Edição');
      return;
    }
    const data = {
      idStudent: this.idStudent,
      code: this.subscriptionForm.value.code,
      edition: this.subscriptionForm.value.edition
    };
    this.http.post(`${ this.apiURL }/subscriptions`, data)
      .subscribe((result: any) => {
        alert('Inscrição realizada com sucesso!');
        location.reload();
      });
  }

  ngOnInit(): void {
    this.http.get(`${ this.apiURL }/students/${this.idStudent}`)
      .subscribe((result: any) => {
        this.student = result.content.student;
        this.studentForm.patchValue({
          name: result.content.student.name,
          address: result.content.student.address
        });
      });
  }

}
