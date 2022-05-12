import { Complaints } from './../models/complaints';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Managers } from '../models/managers';

@Injectable({
  providedIn: 'root',
})
export class ManagersService {
  statusUpdateDetails = {};

  private regManagerUrl: string = 'http://localhost:9091/managers/addManager';

  private logManagerUrl: string = 'http://localhost:9091/managers/login';

  private getAllComplaintsByPincodeUrl =
    'http://localhost:9091/managers/getAllComplaintsByPincode';

  private assignEngineersDutyUrl =
    'http://localhost:9091/engineerDuty/addEngineerDuty';

  constructor(private _httpClient: HttpClient) {}

  registerManager(value: any): any {
    return this._httpClient.post<Managers>(this.regManagerUrl, value);
  }

  validateManager(value: any) {
    return this._httpClient.post<Managers>(this.logManagerUrl, value);
  }

  getAllComplaintsByPincode(managerPincode: string): Observable<Complaints[]> {
    console.log('in manager.service.ts ==', managerPincode);
    return this._httpClient.get<Complaints[]>(
      `${this.getAllComplaintsByPincodeUrl}/${managerPincode}`
    );
  }
  statusUpdate(
    ticketId: number,
    customerEmail: string,
    selectedEngineer: string
  ) {
    this.statusUpdateDetails = {
      ticketId: ticketId,
      customerEmail: customerEmail,
      selectedEngineer: selectedEngineer,
    };
    console.log(this.statusUpdateDetails);

    return this._httpClient.post(
      this.assignEngineersDutyUrl,
      this.statusUpdateDetails
    );
  }
}
