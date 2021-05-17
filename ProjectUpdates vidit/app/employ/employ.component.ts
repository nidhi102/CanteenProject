import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employ } from '../employ';
import { EmployService } from '../employ.service';

@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
  employ : Employ;
  isValid : boolean;
  msg : string;
  constructor(private _employServices : EmployService) { 
    this.isValid=false;
    this.employ=new Employ();
  }
  insert(employForm : NgForm) {
    if(employForm.invalid){
      return;
    }
    this.isValid=true;
    if (this.isValid==true) {
      this._employServices.addEmploy(this.employ).subscribe
      (x => {
        this.msg = x;
      })
     // this.msg="Form Submitted Successfully...";
    }
  }
  ngOnInit(): void {
  }

}
