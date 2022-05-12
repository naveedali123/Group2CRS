import { Component, OnInit } from '@angular/core';
import { Engineers } from './../../models/engineers';
import { AdminService } from './../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-engineers',
  templateUrl: './view-engineers.component.html',
  styleUrls: ['./view-engineers.component.css'],
})
export class ViewEngineersComponent implements OnInit {
  viewEngineersStatus: boolean = false;
  anyButtonClicked: boolean = false;

  constructor(private _adminService: AdminService, private router: Router) {}

  engineers: Engineers[] = [];

  ngOnInit(): void {
    this.viewEngineers();
  }

  logoutAdmin() {
    this.router.navigateByUrl('');
  }

  viewEngineers() {
    this.viewEngineersStatus = true;
    this.anyButtonClicked = true;
    this._adminService.getAllEngineers().subscribe((data) => {
      this.engineers = data;
    });
  }

  deleteEngineer(engineer: Engineers) {
    this._adminService.deleteEngineer(engineer.engineerEmail).subscribe(() => {
      alert('deleted');
      this.viewEngineers();
    });
  }
}
