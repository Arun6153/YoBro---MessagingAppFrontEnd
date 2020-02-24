import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Authenticate } from '../components/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent {

  Auth: Authenticate;
  public users_data: any;

  constructor(private homeService: HomeService) {
    this.Auth = new Authenticate();
    if(!this.Auth.check_user()) window.location.replace('http://127.0.0.1:4200/')
    this.fetch_users();
  }

  fetch_users(): void {

    this.Auth = new Authenticate();
    this.Auth.set_data();

    console.log(":in auth" + " " + this.Auth.user_id());
    this.homeService.updateHome(this.Auth.user_id()).subscribe(
      res => {
        console.log(res);
        this.users_data = res.data;
        console.log(this.users_data);
      },
      error => console.log(error)
    );
  }

}
