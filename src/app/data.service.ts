import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  get_products(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/products');
  }

  get_families(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/families');
  }

  get_locations(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/locations');
  }

  get_transactions(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/transactions');
  }
  
}
