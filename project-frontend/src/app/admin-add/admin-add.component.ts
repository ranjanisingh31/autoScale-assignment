import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from '../users.service';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: UsersService, private route: Router) { }

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
    this.service.registerUser(this.addAdminForm.value).subscribe(
      (res) => {
        // localStorage.setItem("token", res.token);

        alert(res.message);
        this.route.navigate(['/profile']);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            alert(err.error.message + " Please Register again!!!");
            this.addAdminForm.reset();
          } else {
            alert(err.statusText + " Try Again!!!");
            this.addAdminForm.reset();
          }
        }
      }
    );

  }

  ngOnInit(): void {
  }

}
