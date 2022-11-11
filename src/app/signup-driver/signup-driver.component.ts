import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-signup-driver',
  templateUrl: './signup-driver.component.html',
  styleUrls: ['./signup-driver.component.css']
})
export class SignupDriverComponent implements OnInit {
 public message = '';
  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiServiceService
  ) { }

  public userForm = this.formBuilder.group({
    firstname:["", [Validators.required, Validators.minLength(3), Validators.maxLength(22)]],
    lastname:["", [Validators.required, Validators.minLength(3), Validators.maxLength(22)]],
    email:["",[Validators.required, Validators.minLength(5), Validators.maxLength(22), Validators.email]],
    password:[""]
  })
  ngOnInit(): void {
  }

  signup=()=>{
    console.log(this.userForm.value);
    let userDetails = this.userForm.value;
    this.apiService.signupDriver(userDetails).subscribe(data=>{
      console.log(data);
    },error=>console.log(error)
    );
  }

}
