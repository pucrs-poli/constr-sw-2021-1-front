import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  api_url = 'http://ec2-3-16-49-11.us-east-2.compute.amazonaws.com/api/v1'

  constructor(private http: HttpClient) { }

  private formatErrors(error: any) {
    console.log(error)
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api_url}/${path}`, { params })
      .pipe(catchError(this.formatErrors))
  }

  post(path: string, body: Object = {}): Observable<any> {
    console.log(body)
    return this.http.post(`${this.api_url}/${path}`,
      // JSON.stringify(body)
      body
    ).pipe(catchError(this.formatErrors))
  }

  put(path: string, body: Object = {}): Observable<any> {
    console.log(body)
    return this.http.put(`${this.api_url}/${path}`,
      // JSON.stringify(body)
      body
    ).pipe(catchError(this.formatErrors))
  }

  patch(path: string, body: Object = {}): Observable<any> {
    console.log(body)
    return this.http.patch(`${this.api_url}/${path}`,
      // JSON.stringify(body)
      body
    ).pipe(catchError(this.formatErrors))
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.api_url}/${path}`)
      .pipe(catchError(this.formatErrors))
  }
}
