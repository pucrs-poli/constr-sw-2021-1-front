import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModel } from '../models/test.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  private baseUrl = 'http://ec2-3-138-183-70.us-east-2.compute.amazonaws.com';

  constructor(protected httpClient: HttpClient) { }

  getAllTests(): Observable<TestModel[]>{
    return this.httpClient.get<TestModel[]>(`${this.baseUrl}/tests`);
  }

  /* getApi(): Observable<any> {
    const url = 'ec2-54-94-166-37.sa-east-1.compute.amazonaws.com:8083/api/students';
    return this.httpClient.get<any>(url);
  } */
}
