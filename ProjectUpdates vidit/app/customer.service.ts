import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _http: any;
  addCustomer(customer : Customer) : Observable<string> {
    return this._http.post("http://localhost:8080/RestDbCust/webapi/customer/customerInsert/",customer).
    map((res : Response) => res.text());
  }
  constructor() { }
}
