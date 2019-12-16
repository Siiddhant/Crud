import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: '', redirectTo:'register',pathMatch:'full'},
  { path: 'userList', component: UserlistComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit', component: UpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'otp', component: OtpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
