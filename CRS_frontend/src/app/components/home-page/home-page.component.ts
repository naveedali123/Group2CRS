import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoAdminLogin(){
    this.router.navigateByUrl('/login');
  }

  gotoManagerLogin(){
    this.router.navigateByUrl('/manager-login');
  }

  gotoEngineerLogin(){
    this.router.navigateByUrl('/engineer-login');
  }

  gotoCustomerLogin(){
    this.router.navigateByUrl('/customer-login');
  }

  gotoRegisterCustomer(){
    this.router.navigateByUrl('/register');
  }
}
