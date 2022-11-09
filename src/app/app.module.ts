import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { SignupDriverComponent } from './signup-driver/signup-driver.component';
import { SigninDriverComponent } from './signin-driver/signin-driver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SigninAdminComponent,
    SignupAdminComponent,
    SignupDriverComponent,
    SigninDriverComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
