import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  public message = "";

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiServiceService
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
    this.apiService.signupAdmin(userDetails).subscribe(data=>{
      console.log(data);
    },error=>console.log(error)
    );
  }

}
