import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserServiceService) { }

  user!: FormGroup;

  ngOnInit(): void {
    this.user = new FormGroup({
      emailId: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  value:any = {
    emailId: '', firstName: '', lastName: ''
  }

  submit(details: FormGroup){
    this.value = {
      emailId: details.value.emailId,
      firstName: details.value.firstName,
      lastName: details.value.lastName
    }
    console.log(this.value);
    this.userService.addUser(this.value).subscribe(data => {
      console.log("Added succesfully...")
    });
  }

  displayUsers: any[] | undefined;
  displayAllUsers(){
    this.userService.getUser().subscribe(data => {
      console.log(data);
      this.displayUsers = data;
    })
  }

}
