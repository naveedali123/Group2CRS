import { Component, OnInit } from '@angular/core';
import { Managers } from './../../models/managers';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-managers',
  templateUrl: './view-managers.component.html',
  styleUrls: ['./view-managers.component.css'],
})
export class ViewManagersComponent implements OnInit {
  viewManagersStatus: boolean = false;
  anyButtonClicked: boolean = false;

  updateManagerStatus: boolean = false;
  managerUpdating: Managers = new Managers();

  managers: Managers[] = [];

  constructor(private _adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.viewManagers()
  }
  
  logoutAdmin() {
    this.router.navigateByUrl('');
  }

  viewManagers() {
    this.viewManagersStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllManagers().subscribe((data) => {
      this.managers = data;
    });
  }

  deleteManager(manager: Managers) {
    this._adminService.deleteManager(manager.managerEmail).subscribe(() => {
      alert('deleted');
      this.viewManagers();
    });
  }

  updateManager(manager: Managers) {
    this.updateManagerStatus = true;
    this.managerUpdating = manager;
  }
  newManagerUpdates() {
    console.log('pincode : ', this.managerUpdating.managerPincode);
    this._adminService
      .newManagerUpdates(
        this.managerUpdating.managerPincode,
        this.managerUpdating.managerEmail
      )
      .subscribe((data) => {
        if (data) {
          alert('Updated successfully !');
          this.updateManagerStatus = false;
        }
      });
  }
}
