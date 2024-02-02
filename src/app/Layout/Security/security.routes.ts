import { Routes } from "@angular/router";
import { LoginComponent } from "./Component/login/login.component";
import { RegisterComponent } from "./Component/register/register.component";
import { ForgetPasswordComponent } from "./Component/forget-password/forget-password.component";

export const securityroutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',  component: LoginComponent
  },
  {
    path: 'register',  component: RegisterComponent
  },
  {
    path: 'forget',  component: ForgetPasswordComponent
  }
];