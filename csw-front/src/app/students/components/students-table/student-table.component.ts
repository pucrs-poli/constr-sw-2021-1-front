import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StudentElement {
  idStudent: string;
  name: number;
  cpf: string;
  birthDate: string;
  address: string;
}

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  displayedColumns: string[] = ['idStudent', 'name', 'edit', 'delete'];
  dataSource;
  readonly apiURL: string;

  // tslint:disable-next-line:typedef
  handleRemove(event: Event, item: StudentElement) {
    this.http.delete(`${ this.apiURL }/students/${item.idStudent}`)
      .subscribe((result: any) => {
        alert('Aluno removido com sucesso!');
        location.reload();
      });
  }

  constructor(private http: HttpClient) {
    this.apiURL = 'http://ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api';
  }

  // Getting CORS error from API
  ngOnInit(): void {
    this.http.get(`${ this.apiURL }/students`)
       .subscribe((result: any) => {
         this.dataSource = result.content.students;
       });
  }

}
