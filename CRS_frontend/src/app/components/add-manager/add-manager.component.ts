import { Component, OnInit } from '@angular/core';
import { Complaints } from '../../models/complaints';
import { ManagersService } from '../../services/managers.service';
import { Managers } from '../../models/managers';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  manager: Managers = new Managers();
  managerLoggedIn: string;
  managerloginStatus: boolean = false;

  managerPincode: string;
  complaints: Complaints[] = [];

  public loginForm !: FormGroup
 

  constructor(
    private _managersService: ManagersService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      managerEmail: [''],
      managerPassword: [''],
      managerName: [''],
      managerPincode: [''],
    });
  }

  logoutAdmin(){
    this.router.navigateByUrl('');
  }

  registerManager(): any {
    console.log('inside registerManager() !');
    this._managersService.registerManager(this.loginForm.value).subscribe(() => {
      alert('Successfully Registered !');
      this.loginForm.reset
    });
  }
}
