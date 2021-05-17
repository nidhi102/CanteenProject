import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ids : Observable<Customer[]>;
  constructor(private _customerService:CustomerService) { 
    this.ids=this._customerService.showCustomer();
  }

  ngOnInit(): void {
  }

}
