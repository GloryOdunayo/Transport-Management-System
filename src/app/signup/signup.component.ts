import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public message = "";

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiServiceService,
    public router: Router
  ) { }

  public userForm = this.formBuilder.group({
    name:["", [Validators.required, Validators.minLength(5), Validators.maxLength(22)]],
    email:["",[Validators.required, Validators.minLength(5), Validators.maxLength(22), Validators.email]],
    age:["", Validators.required],
    password:["", Validators.pattern('[a-z]')]
  })
  ngOnInit(): void {
  }

  signup=()=>{
    console.log(this.userForm.value);
    let userDetails = this.userForm.value;
    this.apiService.signupUser(userDetails).subscribe(data=>{
      console.log(data);
      this.router.navigate(["/signin"]);
    },error=>console.log(error)
    );
  }

}
