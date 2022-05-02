import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Profile } from './profile';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private baseURL="http://localhost:81/api/v1/addLoan";
private baseURL1="http://localhost:80/api/v1/profile/delete"

  constructor(private httpClient : HttpClient) { }

  getCustomerlist():Observable<Customer[]>
  {
  return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  addLoan(customer:Customer):Observable<Object>
  {
      return this.httpClient.post(`${this.baseURL}`,customer);
  }
  getProfileList():Observable<Object>{
    return this.httpClient.get(`${this.baseURL}`);
  }

  createProfile(profile:Profile): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,profile);
  }

  deleteprofile(loanid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL1}/${loanid}`);
  }
  
}
