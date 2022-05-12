import { Component, OnInit } from '@angular/core';
import { Customers } from './../../models/customers';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css'],
})
export class ViewCustomersComponent implements OnInit {
  viewCustomersStatus: boolean = false;

  anyButtonClicked: boolean = false;

  updateCustomerStatus: boolean = false;
  customerUpdating: Customers = new Customers();

  customers: Customers[] = [];

  constructor(private _adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.viewCustomers();
  }

  logoutAdmin() {
    this.router.navigateByUrl('');
  }

  viewCustomers() {
    this.viewCustomersStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  deleteCustomer(customer: Customers) {
    this._adminService.deleteCustomer(customer.customerEmail).subscribe(() => {
      alert('deleted');
      this.viewCustomers();
    });
  }

  updateCustomer(customer: Customers) {
    this.updateCustomerStatus = true;
    this.customerUpdating = customer;
  }

  newCustomerUpdates() {
    console.log('pincode : ', this.customerUpdating.customerPincode);
    this._adminService
      .newCustomerUpdates(
        this.customerUpdating.customerPincode,
        this.customerUpdating.customerEmail
      )
      .subscribe((data) => {
        if (data) {
          alert('Updated successfully !');
          this.updateCustomerStatus = false;
        }
      });
  }
}
