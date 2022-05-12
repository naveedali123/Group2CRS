import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminlogService {

  private adminLoggedIn: string

  constructor(private _httpClient: HttpClient) {}

  private logAdminUrl: string = 'http://localhost:9091/admin/login';
  
  validateAdmin(value: any) {
    return this._httpClient.post<Admin>(this.logAdminUrl, value);
  }

  setAdminLoggedIn(adminLoggedIn: string) {
    this.adminLoggedIn = adminLoggedIn;
  }
  getAdminLoggedIn() {
    return this.adminLoggedIn;
  }
}
