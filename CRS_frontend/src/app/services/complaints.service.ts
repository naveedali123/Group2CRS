import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Complaints } from '../models/complaints';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  statusUpdateDetails = {};

  private regComplaintUrl: string =
    'http://localhost:9091/complaints/addComplaint';

  private getAllComplaintsByEmailUrl: string =
    'http://localhost:9091/complaints/getAllComplaintsByEmail';

  private getAllComplaintsByEngineerEmailUrl: string =
    'http://localhost:9091/complaints/getByengineerEmail';

  constructor(private _httpClient: HttpClient) {}

  getAllComplaintsByEmail(customerEmail: string): Observable<Complaints[]> {
    console.log('in complaint.service.ts ==', customerEmail);
    return this._httpClient.get<Complaints[]>(
      `${this.getAllComplaintsByEmailUrl}/${customerEmail}`
    );
  }

  getAllComplaintsByEngineerEmail(
    engineerEmail: string
  ): Observable<Complaints[]> {
    console.log('in complaint.service.ts ==', engineerEmail);
    return this._httpClient.get<Complaints[]>(
      `${this.getAllComplaintsByEngineerEmailUrl}/${engineerEmail}`
    );
  }

  registerComplaint(
    customerEmail: string,
    complaint_type: string,
    pincode: string,
    complaint: string
  ) {
    this.statusUpdateDetails = {
      customerEmail: customerEmail,
      complaintType: complaint_type,
      pincode: pincode,
      complaint: complaint,
    };
    console.log(this.statusUpdateDetails);

    return this._httpClient.post(
      this.regComplaintUrl,
      this.statusUpdateDetails
    );
  }
}
