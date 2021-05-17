import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employ } from '../employ';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employ-search',
  templateUrl: './employ-search.component.html',
  styleUrls: ['./employ-search.component.css']
})
export class EmploySearchComponent implements OnInit {
empno:number;
employ:Observable<Employ>;
  constructor(private _employService :EmployService) { }

  search(){
    this.employ=this._employService.searchEmploy(this.empno);
  }
  ngOnInit(): void {
  }

}
