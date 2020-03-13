import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  list = [];
  constructor(public http: HttpClient) { }

  get(endpoint: string, data?: Map<string, string>): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      params: this.getHttpParams(data)
    };
    return this.http.get(endpoint, httpOptions);
  }

  private getHttpParams(data: Map<string, string>): HttpParams {
    if (data === undefined) {
      return new HttpParams();
    }
    let httpParams: HttpParams = new HttpParams();
    data.forEach((value: string, key: string) => {
      httpParams = httpParams.append(key, value);
    });
    return httpParams;
  }

}
