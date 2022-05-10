import { AdminlogService } from '../../services/adminlog.service';
import { Admin } from '../../models/admin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-regadmin',
  templateUrl: './regadmin.component.html',
  styleUrls: ['./regadmin.component.css'],
})
export class RegadminComponent implements OnInit {
  admin: Admin = new Admin();
  adminLoggedIn: String;
  constructor(
    private _adminlogService: AdminlogService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {}

  loginForm = this._formBuilder.group({
    adminEmail: '',
    adminPassword: '',
  });

  ngOnInit(): void {}

  registerAdmin(): any {
    console.log('inside registerAdmin () !');

    this._adminlogService.registerAdmin(this.admin).subscribe(() => {
      alert('Successfully Registered !');
    });
  }

  validateAdmin(): any {
    this._adminlogService
      .validateAdmin(this.loginForm.value)
      .subscribe((data) => {
        if (data) {
          this.adminLoggedIn = this.loginForm.value['adminEmail'];
          this._adminlogService.setAdminLoggedIn(
            this.adminLoggedIn.toString()
          );

          console.log(
            'admin Exists : reached safely !',
            this.adminLoggedIn
          );

          this._router.navigateByUrl('/components/admin');
          // this._router.navigate([
          //   '/customers/registerComplaints',
          //   {
          //     state: { customerLoggedIn: this.customerLoggedIn },
          //   },
          // ]);
        } else {
          console.log('Customer does not exists !');
          
        }
        this._adminlogService.validateAdmin(this.admin).subscribe(() => {
          alert('incorrect Email and Password !');
        });
      });
  }
}
