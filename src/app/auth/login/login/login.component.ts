import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice: AuthServiceService, private router: Router) { }

  option: string = this.router.url

  ngOnInit(): void {
  }

  onlogin (loginForm: NgForm)
  {
    if (loginForm.invalid)
    {
      return;
    }
    if (this.option == '/login') 
    {
      this.authservice.login(loginForm.value.enteredusername, loginForm.value.enteredpassword, loginForm.value.enteredemail)
    }
    else 
    {
      this.authservice.signup(loginForm.value.enteredusername, loginForm.value.enteredpassword, loginForm.value.enteredemail)
    }
  }

}
