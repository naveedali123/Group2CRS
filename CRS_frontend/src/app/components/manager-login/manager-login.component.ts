import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagersService } from './../../services/managers.service';
import { Managers } from './../../models/managers';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css'],
})
export class ManagerLoginComponent implements OnInit {
  manager: Managers = new Managers();
  managerLoggedIn: string;
  managerloginStatus: boolean = false;

  managerPincode: string;

  constructor(
    private _managersService: ManagersService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  loginForm = this._formBuilder.group({
    managerEmail: '',
    managerPassword: '',
  });

  ngOnInit(): void {}

  validateManager(): any {
    this._managersService
      .validateManager(this.loginForm.value)
      .subscribe((data) => {
        if (data != null) {
          this.managerLoggedIn = this.loginForm.value['managerEmail'];
          this.managerloginStatus = true;
          this.managerPincode = data.managerPincode;
          console.log('Manager Exists : reached safely !', this.managerPincode);
          sessionStorage.setItem("loggedUser", JSON.stringify(data))
          this._router.navigate(['manager-dashboard'], { state: data });
        } else {
          console.log('Manager does not exists !');
        }
      });
  }
}
