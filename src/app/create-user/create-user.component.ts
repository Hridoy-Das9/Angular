import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { v4 as uuidv4 } from 'uuid';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm:any
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userForm=this.fb.group({
      fname:['',Validators.required ],
      lname:['',Validators.required ],
      gender:['',Validators.required],
      date:['',Validators.required],
      city:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
    })
  }
  onSubmit() {
    console.log("form",this.userForm.value)
    // console.log(user,form);
    this.userService.onAdd(this.userForm.value);
    this.router.navigateByUrl('');
  }

}
