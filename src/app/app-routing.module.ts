import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { SigninDriverComponent } from './signin-driver/signin-driver.component';
import { SigninComponent } from './signin/signin.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { SignupDriverComponent } from './signup-driver/signup-driver.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'signup',children:[
    {path:'', component:SignupComponent},
    {path:'/admin', component:SignupAdminComponent},
    {path:'/driver', component:SignupDriverComponent},
  ]},
  {path:'signin',children:[
    {path:'', component:SigninComponent},
    {path:'/admin', component:SigninAdminComponent},
    {path:'/driver', component:SigninDriverComponent},
  ], canActivate: [AuthGuardGuard]},
  {path:'users',children:[
    // {path:'', component:UsersComponent},
    {path:':id', component:UserProfileComponent}
  ], canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
