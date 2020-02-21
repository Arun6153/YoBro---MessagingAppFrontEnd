import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  login;
  constructor(private loginService:LoginService) {}

  ngOnInit() {
    this.login={
      email:"",
      password:"",
    };
  }
  logging() {
    console.log("in login");
    this.loginService.loginUser(this.login).subscribe(
      response => {
        console.log("In process");
        alert(this.login.email + "you are logging.");
        window.location.href='http://127.0.0.1:4200/home'
      },
      error => console.log(error)
    );
  }
}

