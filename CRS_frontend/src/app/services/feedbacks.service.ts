import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Complaints } from './../models/complaints';
import { HttpClient } from '@angular/common/http';
import { Feedbacks } from './../models/feedbacks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeedbacksService {
  statusUpdateDetails = {};

  complaint: Complaints;

  private sendFeedbackUrl: string =
    'http://localhost:9091/feedbacks/addFeedback';

  private getAllFeedbacksUrl: string =
    'http://localhost:9091/feedbacks/getAllFeedbacks';

  constructor(private _httpClient: HttpClient, private _router: Router) {}

  sendComplaintDetails(complaint: Complaints) {
    this.complaint = complaint;
    this._router.navigateByUrl('/feedbacks/sendFeedback');
  }

  getAllFeedbacks(): Observable<Feedbacks[]> {
    return this._httpClient.get<Feedbacks[]>(this.getAllFeedbacksUrl);
  }

  sendFeedback(ticketId: number, customerEmail: string, feedback: string) {
    this.statusUpdateDetails = {
      ticketId: ticketId,
      customerEmail: customerEmail,
      feedback: feedback,
    };
    console.log(this.statusUpdateDetails);

    return this._httpClient.post(
      this.sendFeedbackUrl,
      this.statusUpdateDetails
    );
  }
}
