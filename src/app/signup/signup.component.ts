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
  errorString = "";
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
    if(this.register.email!="" && this.register.password!="" && this.register.address!=""  && this.register.name!="")
    {  
    this.signupService.signUpUser(this.register).subscribe(
        response => {
          alert("Your account is created.");
        },
        error => console.log(error)
    );
    }
    else{
      this.errorString = "Enter all the fields correctly."
    }
  }
}
