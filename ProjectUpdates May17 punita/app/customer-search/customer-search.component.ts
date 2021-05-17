import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  custId:number;
  customer:Observable<Customer>;
  constructor(private _customerService : CustomerService) { }
  search(){
    this.customer=this._customerService.searchCustomer(this.custId);
  }
  ngOnInit(): void {
  }
}
