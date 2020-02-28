import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ChatspaceComponent } from './chatspace/chatspace.component';
import { FormGroupComponent } from './form-group/form-group.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  { 
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'chatspace',
    component:ChatspaceComponent
  },
  {
    path:'new-group',
    component:FormGroupComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }