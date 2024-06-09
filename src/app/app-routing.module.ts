import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { ForgotPasswordsComponent } from './forgot-passwords/forgot-passwords.component';
import { authGuard } from './/auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:'',  canActivate:[authGuard],component:HomeComponent},
  {path:'contact',     component:ContactComponent},
  {path:'login',        canActivate:[authGuard],component:LoginComponent},
  {path:'register',   canActivate:[authGuard], component:RegisterComponent},
  {path:'forgotPassword',     canActivate:[authGuard], component:ForgotPasswordsComponent},

  {path:'aboutUs',  canActivate:[authGuard],component:AboutUsComponent},
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
