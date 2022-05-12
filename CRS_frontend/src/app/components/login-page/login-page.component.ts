import { Component, OnInit } from '@angular/core';
import { AdminlogService } from '../../services/adminlog.service';
import { Admin } from '../../models/admin';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  admin: Admin = new Admin();

  public loginForm!: FormGroup;

  adminLoggedIn: String;
  constructor(
    private _adminlogService: AdminlogService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      adminEmail: ['', Validators.required, Validators.email],
      adminPassword: [''],
    });
  }

  validateAdmin(): any {
    this._adminlogService
      .validateAdmin(this.loginForm.value)
      .subscribe((data) => {
        if (data) {
          this.adminLoggedIn = this.loginForm.value['adminEmail'];
          this._adminlogService.setAdminLoggedIn(this.adminLoggedIn.toString());

          console.log('admin Exists : reached safely !', this.adminLoggedIn);

          sessionStorage.setItem('loggedUser', JSON.stringify(data));
          this._router.navigateByUrl('admin-dashboard');
        } else {
          console.log('admin does not exists !');
          this._adminlogService.validateAdmin(this.admin).subscribe(() => {
            alert('incorrect Email and Password !');
          });
        }
      });
  }
}
