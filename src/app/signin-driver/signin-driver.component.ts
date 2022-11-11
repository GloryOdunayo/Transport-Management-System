import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-signin-driver',
  templateUrl: './signin-driver.component.html',
  styleUrls: ['./signin-driver.component.css']
})
export class SigninDriverComponent implements OnInit {
  public message ='';
  public userForm = this.formBuilder.group({
    email:["",[Validators.required, Validators.minLength(5), Validators.maxLength(22), Validators.email]],
    password:[""]
  })

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.userForm.value);
    let userDetails = this.userForm.value;
    this.apiService.signinDriver(userDetails).subscribe(data=>{
      console.log(data);
    },error=>console.log(error)
    );
  }

}
