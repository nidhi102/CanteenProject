import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Employ } from './employ';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  constructor(private _http:Http) {

   }
   searchEmploy(empno:number):Observable<Employ>{
    return this._http.get("http://localhost:8080/EmployServiceExample/webapi/employ/" +empno).
    map((res:Response)=>res.json())
   }
   showEmploy() : Observable<Employ[]> {
    return this._http.get("http://localhost:8080/EmployServiceExample/webapi/employ/").
    map((res:Response)=>res.json())
  }
}
