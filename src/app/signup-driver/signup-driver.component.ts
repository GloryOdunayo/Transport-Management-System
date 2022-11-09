import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-driver',
  templateUrl: './signup-driver.component.html',
  styleUrls: ['./signup-driver.component.css']
})
export class SignupDriverComponent implements OnInit {
 public message = '';
 public firstname = '';
 public lastname = '';
 public email = '';
 public password = '';
  constructor(
    public formBuilder: FormBuilder
  ) { }

  public userForm = this.formBuilder.group({
    firstname:["", [Validators.required, Validators.minLength(3), Validators.maxLength(22)]],
    lastname:["", [Validators.required, Validators.minLength(3), Validators.maxLength(22)]],
    email:["",[Validators.required, Validators.minLength(5), Validators.maxLength(22), Validators.email]],
    age:["", Validators.required],
    password:["", Validators.pattern('[a-z]')]
  })
  ngOnInit(): void {
  }

  signup=()=>{
    let userDetails = {firstname:this.firstname, lastname:this.lastname, email:this.email, password:this.password};
    // console.log(userDetails);
    // if(this.userArray){
    //   this.userArray.push(userDetails)
    //   console.log(this.userArray);
    //   localStorage.setItem("allUsers", JSON.stringify(this.userArray))
    //   this.message = "User Save Successfully"
    //   this.router.navigate(["/users"])
    // } else{
    //   this.message = "error occured"
    // }
  }

}
