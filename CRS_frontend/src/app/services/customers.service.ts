import { Customers } from './../models/customers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private regCustomerUrl: string = 'http://localhost:9091/customers/addCustomer';

  private logCustomerUrl: string = 'http://localhost:9091/customers/login';

  private customerLoggedIn: string;

  constructor(private _httpClient: HttpClient) {}

  registerCustomer(value: any) {
    return this._httpClient.post<Customers>(this.regCustomerUrl, value);
  }

  validateCustomer(value: any) {
    return this._httpClient.post<Customers>(this.logCustomerUrl, value);
  }

  setCustomerLoggedIn(customerLoggedIn: string) {
    this.customerLoggedIn = customerLoggedIn;
  }
  getCustomerLoggedIn() {
    return this.customerLoggedIn;
  }
}
