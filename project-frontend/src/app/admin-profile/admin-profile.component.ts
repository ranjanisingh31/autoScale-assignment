import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router) { }
  //number of admins
  admins = ["a", "b", "c"];

  //Selected existing Form
  existingUserForm = this.fb.group({
    name: ["", [Validators.required]],
  });

  //on user selection
  selectedUser: string = "";
  flag: boolean = false;
  change() {
    this.selectedUser = this.existingUserForm.value['name'];
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
    this.flag = false;

  }

  ngOnInit(): void {
  }

}
