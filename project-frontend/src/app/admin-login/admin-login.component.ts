import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { UsersService } from '../users.service';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: UsersService, private route: Router) { }

  //icon
  public hide = true;

  //loginForm
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });

  //On click Login 
  login() {

    this.service.loginUser(this.loginForm.value).subscribe(
      (res) => {
        // localStorage.setItem("token", res.token);
        alert(res.message);
        this.route.navigate(['/profile']);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            alert(err.error.message + " Enter registered Email.");
            this.loginForm.reset();
          } else {
            alert(err.statusText + " Try Again!!!");
            this.loginForm.reset();
          }
        }

      }
    );
  }


  ngOnInit(): void {
  }

}
