import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Engineers } from '../models/engineers';
import { Complaints } from '../models/complaints';

@Injectable({
  providedIn: 'root',
})
export class EngineersService {
  updatedStatus = {};
  private regEngineerUrl: string =
    'http://localhost:9091/engineers/addEngineer';

  private logEngineerUrl: string = 'http://localhost:9091/engineers/login';

  private getAllEngineerMailsUrl: string =
    'http://localhost:9091/engineers/getAllEngineerMails';

  private getAllComplaintsByTicketIdUrl: string =
    'http://localhost:9091/complaints/getAllComplaintsByTicketIds';
    
  private updateStatusUrl: string =
    'http://localhost:9091/engineerDuty/updateStatus';

  private getAllComplaintsByEmailUrl: string =
    'http://localhost:9091/managers/getAllComplaintsByPincode';

  constructor(private _httpClient: HttpClient) {}

  registerEngineer(value: any) {
    return this._httpClient.post<Engineers>(this.regEngineerUrl, value);
  }

  validateEngineer(value: any) {
    return this._httpClient.post<number[]>(this.logEngineerUrl, value);
  }

  getAllEngineerMails(): Observable<string[]> {
    return this._httpClient.get<string[]>(this.getAllEngineerMailsUrl);
  }

  getAllComplaintsByTicketIds(ticketIds: number[]): Observable<Complaints[]> {
    console.log(ticketIds);
    return this._httpClient.post<Complaints[]>(
      this.getAllComplaintsByTicketIdUrl,
      ticketIds
    );
  }

  updateStatus(ticketId: number, Status: string) {
    this.updatedStatus = {
      ticketId: ticketId,
      Status: Status,
    };

    return this._httpClient.post(this.updateStatusUrl, this.updatedStatus);
  }

  getAllComplaintsByEmail(managerPincode: string): Observable<Complaints[]> {
    console.log('in manager.service.ts ==', managerPincode);
    return this._httpClient.get<Complaints[]>(
      `${this.getAllComplaintsByEmailUrl}/${managerPincode}`
    );
  }
}
