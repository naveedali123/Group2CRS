import { Component, OnInit } from '@angular/core';
import { AdminlogService } from '../../services/adminlog.service';
import { Admin } from '../../models/admin';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from './../../services/customers.service';
import { Customers } from './../../models/customers';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {

  public loginForm!: FormGroup;
  customer: Customers = new Customers();
  customerLoggedIn: String;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _customersService: CustomersService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      customerEmail: '',
    customerPassword: '',
    });
  }

  validateCustomer(): any {
    this._customersService
      .validateCustomer(this.loginForm.value)
      .subscribe((data) => {
        if (data) {
          this.customerLoggedIn = this.loginForm.value['customerEmail'];
          this._customersService.setCustomerLoggedIn(
            this.customerLoggedIn.toString()
          );

          console.log(
            'Customer Exists : reached safely !',
            this.customerLoggedIn
          );
          sessionStorage.setItem("loggedUser", JSON.stringify(data))
          this._router.navigate(['/customer-dashboard'], { state: data });
         
        } else {
          console.log('Customer does not exists !');
          
        }
        this._customersService.validateCustomer(this.customer).subscribe(() => {
          alert('incorrect Email and Password !');
        });
      });
  }
}
