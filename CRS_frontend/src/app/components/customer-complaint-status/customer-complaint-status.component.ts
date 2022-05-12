import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from './../../services/complaints.service';
import { CustomersService } from './../../services/customers.service';
import { Router } from '@angular/router';
import { Complaints } from './../../models/complaints';
import { FeedbacksService } from './../../services/feedbacks.service';
import { AdminService } from './../../services/admin.service';

@Component({
  selector: 'app-customer-complaint-status',
  templateUrl: './customer-complaint-status.component.html',
  styleUrls: ['./customer-complaint-status.component.css']
})
export class CustomerComplaintStatusComponent implements OnInit {

  complaint: Complaints = new Complaints();
  complaints: Complaints[] = [];
  viewComplaints: boolean = false;
  sentFeedback: boolean = false;
  updateComplaintStatus: boolean = false;
  complaintUpdating: Complaints = new Complaints();
  selectedFeedback: string;

  data: any;

  constructor(
    private router: Router,
    private _complaintsService: ComplaintsService,
    private _customersService: CustomersService,
    private _adminService: AdminService,
    private _feedbacksService: FeedbacksService
  ) {
    this.complaint.customerEmail = _customersService.getCustomerLoggedIn();
    this.data = JSON.parse(sessionStorage.getItem('loggedUser')!);
  }

  ngOnInit(): void {
    this.getAllComplaintsByEmail(this.data.customerEmail)
  }

  getAllComplaintsByEmail(customerEmail: string) {
    this.viewComplaints = true;
    console.log('in complaint.component.ts ==', customerEmail);

    this._complaintsService
      .getAllComplaintsByEmail(customerEmail)
      .subscribe((data) => {
        console.log('data = complaints fetched based on email', data);
        this.complaints = data;
      });
  }

  updateFeedback(complaint: Complaints) {
    this.updateComplaintStatus = true;
    this.complaintUpdating = complaint;
  }

  sendComplaintDetails(complaint: Complaints): any {
    this._feedbacksService.sendComplaintDetails(complaint);
  }

  logoutAdmin() {
    sessionStorage.removeItem('loggedUser')
    this.router.navigateByUrl('');
  }

  feedbackSelected(event: any) {
    this.selectedFeedback = event.target.value;
  }

  submitFeedback() {
    console.log('pincode : ', this.complaint.pincode);
    this._feedbacksService
      .sendFeedback(
        this.complaintUpdating.ticketId,
        this.complaintUpdating.customerEmail,
        this.selectedFeedback
      )
      .subscribe((data) => {
          alert('Updated successfully !');
          this.updateComplaintStatus = false;
      });
  }
}
