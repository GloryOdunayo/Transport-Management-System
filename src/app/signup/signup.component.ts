import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstname:String ='';
  public lastname:String ='';
  public email:String ='';
  public password:String ='';
  public message = "";
  public userArray:any = [];
  public user:any = {};

  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) { }

  public userForm = this.formBuilder.group({
    name:["", [Validators.required, Validators.minLength(5), Validators.maxLength(22)]],
    email:["",[Validators.required, Validators.minLength(5), Validators.maxLength(22), Validators.email]],
    age:["", Validators.required],
    password:["", Validators.pattern('[a-z]')]
  })
  ngOnInit(): void {
    this.userArray = JSON.parse(localStorage['allUsers']);
    // this.userArray = this.userService.getUsers();
    console.log(this.userArray);
  }

  signup=()=>{
    let userDetails = {firstname:this.firstname, lastname:this.lastname, email:this.email, password:this.password};
    console.log(userDetails);
    if(this.userArray){
      this.userArray.push(userDetails)
      console.log(this.userArray);
      localStorage.setItem("allUsers", JSON.stringify(this.userArray))
      this.message = "User Save Successfully"
      this.router.navigate(["/signin"])
    } else{
      this.message = "error occured"
    }
  }

}
