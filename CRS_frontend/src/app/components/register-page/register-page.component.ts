import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customers } from '../../models/customers';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  customer: Customers = new Customers();
  customerLoggedIn: String;

  public loginForm !: FormGroup

  constructor(private _customersService: CustomersService,  private _formBuilder: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      customerName: [''],
      customerMobile: [''],
      customerEmail: [''],
      customerPassword: [''],
      customerPincode: [''],
      customerAddress: [''],
    });
  
  }

 
  registerCustomer(): any {
    console.log('inside registerCustomer () !');

    this._customersService.registerCustomer(this.loginForm.value).subscribe(() => {
      alert('Successfully Registered !');
      this.router.navigateByUrl('')
    });
  }

}
