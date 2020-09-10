import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private service: UsersService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.service.loggedIn()) { return true; }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
