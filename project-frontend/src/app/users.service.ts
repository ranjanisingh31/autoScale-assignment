import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { admin } from "./interfaces/admin";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private base_url = "http://localhost:3000/api/";

  registerUser(userData): Observable<admin> {
    return this.http.post<admin>(this.base_url + "register", userData);
  }
  loginUser(userData): Observable<admin> {
    return this.http.post<admin>(this.base_url + "login", userData);
  }

  getUsers(): Observable<admin> {
    return this.http.get<admin>(this.base_url + "allUsers");
  }
  deleteUser(userData): Observable<admin> {
    return this.http.post<admin>(this.base_url + "deleteUser", { email: userData });
  }
}
