import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-driver',
  templateUrl: './signin-driver.component.html',
  styleUrls: ['./signin-driver.component.css']
})
export class SigninDriverComponent implements OnInit {
  public email ='';
  public password = '';
  public message ='';
  public userArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    let found = this.userArray.find((item:any, index:any)=>item.email == this.email && item.password == this.password)
    if(found){
      console.log("I found the user");
      // localStorage.setItem("email",this.email);
      // this.router.navigate(["/users"])
    } else {
      this.message='Invalid Credentials'
      console.log("Not found");
    }
  }

}
