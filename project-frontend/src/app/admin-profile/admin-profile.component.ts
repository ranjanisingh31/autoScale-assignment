import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { UsersService } from '../users.service';
import { admin } from '../interfaces/admin';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private service: UsersService) { }
  //number of admins
  admins: admin[];

  //Selected existing Form
  existingUserForm = this.fb.group({
    name: ["", [Validators.required]],
  });

  //on user selection
  selectedUser: string = "";
  selectedEmail: string = "";
  flag: boolean = false;
  change(e) {

    for (var i = 0; i < this.admins.length; i++) {
      if (e.value === this.admins[i].email) {
        this.selectedUser = this.admins[i].name;
        this.selectedEmail = this.admins[i].email;
      }
    }
    this.flag = true;
  }

  clear() {
    this.existingUserForm.reset();
    this.flag = false;

  }
  //add new user
  addNewAdmin() {
    this.route.navigate(['profile/add'])
  }
  //on delete
  delete() {
    this.service.deleteUser(this.selectedEmail).subscribe(
      (res) => {
        alert(res.message);
        this.admins = [];
        this.getAllUsers();
      }, (err) => {
        if (err instanceof HttpErrorResponse) {
          alert(err.error.message);
        }
      }
    );
    this.flag = false;

  }
  getAllUsers() {
    var data = {};
    this.service.getUsers().subscribe(
      (res) => {
        data = res;
        this.admins = Object.values(data);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          alert(err.error.message);
        }
      }
    );
  }
  ngOnInit(): void {
    //drop-downlist get all admins
    this.getAllUsers();

  }

}
