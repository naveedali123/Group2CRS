import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Engineers } from '../../models/engineers';
import { EngineersService } from '../../services/engineers.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.css']
})

export class AddEngineerComponent implements OnInit {

  engineer: Engineers = new Engineers();
  engineerLoggedIn: string;
  engineerLoginStatus: boolean = false;

  public loginForm !: FormGroup

  constructor(
    private _engineersService: EngineersService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {}

  logoutAdmin(){
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      engineerEmail: [''],
      engineerPassword: [''],
      engineerName: [''],
    });
  }

  registerEngineer(): any {
    console.log('inside registerManager() !');
    this._engineersService.registerEngineer(this.loginForm.value).subscribe(() => {
      alert('Successfully Registered !');
      this.loginForm.reset()
    });
  }

}
