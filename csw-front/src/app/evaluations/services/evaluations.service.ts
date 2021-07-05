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
}
