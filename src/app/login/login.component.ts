import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Authenticate } from '../components/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  login;
  Auth: Authenticate;
  check;
  errorString;
  constructor(private loginService: LoginService) {
    this.Auth = new Authenticate();
    this.check = this.Auth.check_user();
    console.log(this.check);
    if (this.check)
      window.location.replace('http://127.0.0.1:4200/home')
  }

  ngOnInit() {
    this.login = {
      email: "",
      password: "",
    };
    this.errorString="";
  }
  logging() {
    console.log("in login");
    this.loginService.loginUser(this.login).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('logged_user', JSON.stringify(res.data[0]));
        window.location.replace('http://127.0.0.1:4200/home');
      },
      error => {
        this.errorString="Your email or password is wrong.";
        console.log(error)
      }
    );
  }
}

