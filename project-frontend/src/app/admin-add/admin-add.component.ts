import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, Form } from "@angular/forms";

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  //icon
  public hide = true;

  //new admin Form
  addAdminForm = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });

  //on click add
  add() {

  }

  ngOnInit(): void {
  }

}
