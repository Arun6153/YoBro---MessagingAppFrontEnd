import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService],
})
export class SignupComponent implements OnInit {
  register;
  constructor(private signupService: SignupService) { 
    console.log("in constructor");
  }

  ngOnInit() {
    console.log("in ngoninit");
    this.register = {
      email: "",
      password: "",
      address: "",
      name:"",
    };
  }
  signUp() {
    console.log("in register");
    this.signupService.signUpUser(this.register).subscribe(
      response => {
        console.log("In process");
        alert(this.register.email + "'s account has been created.");
      },
      error => console.log(error)

    );
  }
}
