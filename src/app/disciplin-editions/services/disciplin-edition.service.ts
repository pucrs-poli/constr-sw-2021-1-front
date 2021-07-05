import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinEditionService {

  private baseUrl = 'http://ec2-3-16-76-105.us-east-2.compute.amazonaws.com';

  constructor(protected httpClient: HttpClient) { }

  getAllEditions(): Observable<any[]>{
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 2132132dw'
   });
   console.log(reqHeader)
    return this.httpClient.get<any>(`${this.baseUrl}/editions`, { headers: reqHeader });
  }

  /* getApi(): Observable<any> {
    const url = 'ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api/students';
    return this.httpClient.get<any>(url);
  } */
}
