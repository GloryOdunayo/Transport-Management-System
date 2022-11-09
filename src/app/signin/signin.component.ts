import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public email ='';
  public password = '';
  public message ='';
  public userArray = [];

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    let found = this.userArray.find((item:any, index:any)=>item.email == this.email && item.password == this.password)
    if(found){
      console.log("I found the user");
      localStorage.setItem("email",this.email);
      this.router.navigate(["/users"])
    } else {
      this.message='Invalid Credentials'
      console.log("Not found");
    }
  }

}
