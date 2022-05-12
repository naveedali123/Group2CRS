import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaints } from './../../models/complaints';
import { AdminService } from './../../services/admin.service';
import { EngineersService } from './../../services/engineers.service';
import { Managers } from './../../models/managers';
import { ManagersService } from './../../services/managers.service';
import { Engineers } from './../../models/engineers';
import { Feedbacks } from './../../models/feedbacks';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css'],
})
export class ManagerDashboardComponent implements OnInit {
  viewComplaintsStatus: boolean = false;
  updateManagerStatus: boolean = false;
  viewEngineersStatus: boolean = false;

  anyButtonClicked: boolean = false;

  updateComplaintStatus: boolean = false;
  complaintUpdating: Complaints = new Complaints();

  complaints: Complaints[] = [];
  engineers: Engineers[] = [];
  feedbacks: Feedbacks[] = [];

  viewComplaints: boolean = false;

  managerUpdating: Managers = new Managers();

  manager: Managers = new Managers();
  managerLoggedIn: string;
  managerloginStatus: boolean = false;

  viewFeedbacksStatus: boolean = false;
  managerPincode: string;

  assignEngineersButton: boolean = true;
  assignEngineersDropdown: boolean = false;
  engineerEmails: string[] = [];
  selectedEngineer: string;
  data: any;

  constructor(
    private _adminService: AdminService,
    private router: Router,
    private _engineersService: EngineersService,
    private _managersService: ManagersService
  ) {
    this.data = JSON.parse(sessionStorage.getItem('loggedUser')!);
  }

  ngOnInit(): void {
    this.viewEngineers();
    this.viewFeedbacks();
    this.getAllComplaintsByPincode();
  }

  viewFeedbacks() {
    this.viewFeedbacksStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllFeedbacks().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  viewEngineers() {
    this.viewEngineersStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllEngineers().subscribe((data) => {
      this.engineers = data;
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

  engineerSelected(event: any) {
    this.selectedEngineer = event.target.value;
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

  engineersDuty() {
    this._managersService
      .statusUpdate(
        this.complaintUpdating.ticketId,
        this.complaintUpdating.customerEmail,
        this.selectedEngineer
      )
      .subscribe((data) => {
        if (data) {
          alert('Engineer Assigned');
        } else {
          alert('complaint already assigned');
        }

        this.updateManagerStatus = false;
      });
  }
}
