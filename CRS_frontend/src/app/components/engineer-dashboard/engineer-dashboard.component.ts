import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaints } from './../../models/complaints';
import { AdminService } from './../../services/admin.service';
import { EngineersService } from './../../services/engineers.service';
import { Managers } from './../../models/managers';
import { ManagersService } from './../../services/managers.service';
import { Engineers } from './../../models/engineers';
import { Feedbacks } from './../../models/feedbacks';
import { ComplaintsService } from './../../services/complaints.service';

@Component({
  selector: 'app-engineer-dashboard',
  templateUrl: './engineer-dashboard.component.html',
  styleUrls: ['./engineer-dashboard.component.css'],
})
export class EngineerDashboardComponent implements OnInit {
  viewComplaintsStatus: boolean = false;
  updateManagerStatus: boolean = false;
  viewEngineersStatus: boolean = false;

  anyButtonClicked: boolean = false;

  updateComplaintStatus: boolean = false;
  complaintUpdating: Complaints = new Complaints();

  complaints: Complaints[] = [];
  engineers: Engineers[] = [];

  viewComplaints: boolean = false;

  managerUpdating: Managers = new Managers();

  manager: Managers = new Managers();
  managerLoggedIn: string;
  managerloginStatus: boolean = false;

  viewFeedbacksStatus: boolean = false;

  feedbacks: Feedbacks[] = [];
  managerPincode: string;

  assignEngineersButton: boolean = true;
  assignEngineersDropdown: boolean = false;
  engineerEmails: string[] = [];
  selectedStatus: string;
  data: any;
  constructor(
    private _adminService: AdminService,
    private router: Router,
    private _engineersService: EngineersService,
    private _managersService: ManagersService,
    private _complaintsService: ComplaintsService
  ) {
    this.data = JSON.parse(sessionStorage.getItem('loggedUser')!);
  }

  ngOnInit(): void {
    this.viewFeedbacks();
    this.getAllComplaintsByEmails();
  }

  viewFeedbacks() {
    this.viewFeedbacksStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllFeedbacks().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  logoutAdmin() {
    sessionStorage.removeItem('loggedUser');
    this.router.navigateByUrl('');
  }

  assignEngineers() {
    this.assignEngineersButton = false;
    this.assignEngineersDropdown = true;
    this._engineersService.getAllEngineerMails().subscribe((data) => {
      console.log('data = all Engineer Emails', data);
      this.engineerEmails = data;
    });
  }

  statusSelected(event: any) {
    this.selectedStatus = event.target.value;

    console.log(this.selectedStatus);
  }

  getAllComplaintsByEmails() {
    this._complaintsService
      .getAllComplaintsByEngineerEmail(this.data.engineerEmail)
      .subscribe((data) => {
        console.log('data = complaints fetched based on pincode', data);

        this.complaints = data;
      });
  }

  getAllComplaintsByPincode() {
    console.log('Inside manager.components.ts --- ', this.data.managerPincode);

    this.viewComplaints = true;
    this._managersService
      .getAllComplaintsByPincode(this.data.managerPincode)
      .subscribe((data) => {
        console.log('data = complaints fetched based on pincode', data);

        this.complaints = data;
      });
  }

  updateComplaint(complaint: Complaints) {
    this.updateManagerStatus = true;
    this.complaintUpdating = complaint;
  }

  updateStatus() {
    console.log('new status', this.selectedStatus);

    this._engineersService
      .updateStatus(this.complaintUpdating.ticketId, this.selectedStatus)
      .subscribe((data) => {
        console.log('data added successfully', data);
        this.updateManagerStatus = false;
        this.getAllComplaintsByEmails();
        alert('updated Successfully !');
      });
  }
}
