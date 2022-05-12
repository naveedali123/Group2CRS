import { Component, OnInit } from '@angular/core';
import { Engineers } from './../../models/engineers';
import { Router } from '@angular/router';
import { EngineersService } from './../../services/engineers.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-engineer-login',
  templateUrl: './engineer-login.component.html',
  styleUrls: ['./engineer-login.component.css'],
})
export class EngineerLoginComponent implements OnInit {
  engineer: Engineers = new Engineers();
  engineerLoggedIn: string;
  ticketIds: number[] = [];
  engineerLoginStatus: boolean = false;
  newEngineerStatus: string;

  constructor(
    private _engineersService: EngineersService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  loginForm = this._formBuilder.group({
    engineerEmail: '',
    engineerPassword: '',
  });

  ngOnInit(): void {}

  validateEngineer(): any {
    this._engineersService
      .validateEngineer(this.loginForm.value)
      .subscribe((data) => {
        if (data != null) {
          this.engineerLoggedIn = this.loginForm.value['engineerEmail'];
          console.log(
            'Engineer Exists : reached safely with associated ticket Ids -- ',
            data
          );
          
          this.ticketIds = data;
          this.engineerLoginStatus = true;
          sessionStorage.setItem("loggedUser", JSON.stringify(data))
          this._router.navigate(['/engineer-dashboard'], { state: data });
        } else {
          console.log('Engineer does not exists !');
        }
      });
  }
}
