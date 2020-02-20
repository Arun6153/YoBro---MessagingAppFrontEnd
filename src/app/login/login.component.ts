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
    console.log("in register");
    this.loginService.loginUser(this.login).subscribe(
      response => {
        console.log("In process");
        alert(this.login.email + "'s account has been created.");
      },
      error => console.log(error)

    );
  }
}

