import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{ path: '', component: AdminLoginComponent },
{ path: 'profile', component: AdminProfileComponent, canActivate: [AuthGuard] }, { path: 'profile/add', component: AdminAddComponent, canActivate: [AuthGuard] }, {
  path: "**", redirectTo: "/"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
