import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-driver',
  templateUrl: './signup-driver.component.html',
  styleUrls: ['./signup-driver.component.css']
})
export class SignupDriverComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder
  ) { }

  public userForm = this.formBuilder.group({
    name:["", [Validators.required, Validators.minLength(5), Validators.maxLength(22)]],
    email:["",[Validators.required, Validators.minLength(5), Validators.maxLength(22), Validators.email]],
    age:["", Validators.required],
    password:["", Validators.pattern('[a-z]')]
  })
  ngOnInit(): void {
  }

}