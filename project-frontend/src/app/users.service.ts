import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { admin } from "./interfaces/admin";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private route: Router) { }

  private base_url = "http://localhost:3000/api/";

  //add new admin
  registerUser(userData): Observable<admin> {
    return this.http.post<admin>(this.base_url + "register", userData);
  }
  //sigin admin
  loginUser(userData): Observable<admin> {
    return this.http.post<admin>(this.base_url + "login", userData);
  }
  //get all users
  getUsers(): Observable<admin> {
    return this.http.get<admin>(this.base_url + "allUsers");
  }
  //delete specific admin
  deleteUser(userData): Observable<admin> {
    return this.http.post<admin>(this.base_url + "deleteUser", { email: userData });
  }
  //returns boolean value, checks token exist or not
  loggedIn() {
    return !!localStorage.getItem('token');

  }
  //remove token & navigate to login page
  loggedOut() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
  //get stored token
  getToken() {
    return localStorage.getItem('token');
  }
}
