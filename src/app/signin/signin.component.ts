import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public message ='';
  public userForm = this.formBuilder.group({
    email:["",[Validators.required, Validators.minLength(5), Validators.maxLength(22), Validators.email]],
    password:[""]
  })

  constructor(
    public router:Router,
    public formBuilder: FormBuilder,
    public apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.userForm.value);
    let userDetails = this.userForm.value;
    this.apiService.signinUser(userDetails).subscribe(data=>{
      console.log(data);
    },error=>console.log(error)
    );
  }

}
