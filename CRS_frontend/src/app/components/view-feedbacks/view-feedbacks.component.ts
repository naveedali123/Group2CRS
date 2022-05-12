import { Component, OnInit } from '@angular/core';
import { Feedbacks } from './../../models/feedbacks';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.css'],
})
export class ViewFeedbacksComponent implements OnInit {
  viewFeedbacksStatus: boolean = false;
  anyButtonClicked: boolean = false;

  feedbacks: Feedbacks[] = [];

  constructor(private _adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.viewFeedbacks();
  }

  logoutAdmin() {
    this.router.navigateByUrl('');
  }

  viewFeedbacks() {
    this.viewFeedbacksStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllFeedbacks().subscribe((data) => {
      this.feedbacks = data;
    });
  }

  deleteFeedback(feedback: Feedbacks) {
    console.log(feedback.feedbackId);

    this._adminService.deleteFeedback(feedback.feedbackId).subscribe(() => {
      alert('deleted');
      this.viewFeedbacks();
    });
  }
}
