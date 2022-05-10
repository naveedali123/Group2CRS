import { Admin } from '../models/admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminlogService {
  private regAdminUrl: string =
    'http://localhost:8080/admin/addAdmin';
  private logAdminUrl: string = 'http://localhost:9091/admin/login';

  private adminLoggedIn: string;

  constructor(private _httpClient: HttpClient) {}

  registerAdmin(admin: Admin): any {
    return this._httpClient.post<Admin>(this.regAdminUrl, admin);
  }

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
