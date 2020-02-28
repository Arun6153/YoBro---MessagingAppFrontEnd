import { Component,Inject } from '@angular/core';
import { HomeService } from './home.service';
import { Authenticate } from '../components/auth';
import { TransferOnly } from '../chatspace/chatspace.component';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent {

  Auth: Authenticate;
  space: TransferOnly;
  buddy_name: string;
  public users_data: any;
  newGroupActive:boolean;
  chatActive:boolean;

  constructor(private homeService: HomeService) {
    this.chatActive=false;
    this.newGroupActive=true;

    this.Auth = new Authenticate();
    if (!this.Auth.check_user()) window.location.replace('http://127.0.0.1:4200/')
    this.fetch_users();
    this.buddy_name = "Welcome to Yo!Bro";
  }

  fetch_users(): void {
    this.Auth = new Authenticate();
    this.Auth.set_data();
    this.homeService.updateHome(this.Auth.user_id()).subscribe(
      res => {
        this.users_data = res.data;
      },
      error => console.log(error)
    );
  }
  TransferID(data) {
    this.buddy_name = data.name;
    this.space = new TransferOnly();
    this.space.setID(data.id);
    // conditional bool set //
    this.chatActive=true;
    this.newGroupActive=false;
  }
  takeTheWhoreOut()
  {
    localStorage.removeItem('logged_user');
    window.location.replace('http://127.0.0.1:4200/');
  }
  CreateGroup()
  {
    // conditional bool set //
    this.chatActive=false;
    this.newGroupActive=true;
    console.log("in create group");
  }
}
