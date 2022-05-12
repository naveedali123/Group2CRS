import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbacksService } from './../../services/feedbacks.service';
import { ComplaintsService } from './../../services/complaints.service';
import { CustomersService } from './../../services/customers.service';
import { Complaints } from './../../models/complaints';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  complaint: Complaints = new Complaints();
  complaints: Complaints[] = [];
  viewComplaints: boolean = false;
  sentFeedback: boolean = false;
  data: any;
  selectedType: string;
  selectedPincode: string;
  complaintQuery: string;
  email: string;
  constructor(
    private router: Router,
    private _complaintsService: ComplaintsService,
    private _customersService: CustomersService,
    private _feedbacksService: FeedbacksService
  ) {
    this.complaint.customerEmail = _customersService.getCustomerLoggedIn();
    this.data = JSON.parse(sessionStorage.getItem('loggedUser')!);
  }

  ngOnInit(): void {}

  registerComplaint(): any {
    console.log('inside registerComplaint () !');
    this._complaintsService
      .registerComplaint(
        this.data.customerEmail,
        this.selectedType,
        this.data.customerPincode,
        this.complaintQuery
      )
      .subscribe(() => {
        alert('Successfully Registered !');
        
      });
  }

  logoutAdmin() {
    sessionStorage.removeItem('loggedUser')
    this.router.navigateByUrl('');
  }

  typeSelected(event: any) {
    this.selectedType = event.target.value;
  }

  pincodeSelected(event: any) {
    this.selectedPincode = event.target.value;
  }

  complaintText(event: any) {
    this.complaintQuery = event.target.value;
  }

  customerEmailChange(event: any) {
    this.email = event.target.value;
  }
}
