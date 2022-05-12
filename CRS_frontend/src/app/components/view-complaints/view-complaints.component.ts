import { Component, OnInit } from '@angular/core';
import { Complaints } from './../../models/complaints';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css'],
})
export class ViewComplaintsComponent implements OnInit {
  viewComplaintsStatus: boolean = false;

  anyButtonClicked: boolean = false;

  updateComplaintStatus: boolean = false;
  complaintUpdating: Complaints = new Complaints();

  complaints: Complaints[] = [];

  constructor(private _adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.viewComplaints();
  }

  logoutAdmin() {
    this.router.navigateByUrl('');
  }

  viewComplaints() {
    this.viewComplaintsStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllComplaints().subscribe((data) => {
      this.complaints = data;
    });
  }

  deleteComplaint(complaint: Complaints) {
    this._adminService.deleteComplaint(complaint.ticketId).subscribe(() => {
      alert('deleted');
      this.viewComplaints();
    });
  }

  updateComplaint(complaint: Complaints) {
    this.updateComplaintStatus = true;
    this.complaintUpdating = complaint;
  }
  newComplaintUpdates() {
    this._adminService
      .newComplaintUpdates(this.complaintUpdating)
      .subscribe((data) => {
        if (data) {
          alert('Updated successfully !');
          this.updateComplaintStatus = false;
        }
      });
  }
}
