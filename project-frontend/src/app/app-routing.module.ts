import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminAddComponent } from './admin-add/admin-add.component';

const routes: Routes = [{ path: '', component: AdminLoginComponent },
{ path: 'profile', component: AdminProfileComponent }, { path: 'profile/add', component: AdminAddComponent }, {
  path: "**", redirectTo: "/"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
