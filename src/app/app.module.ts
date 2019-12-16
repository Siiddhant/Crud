import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserService } from 'src/app/user.service';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpComponent } from './otp/otp.component';
import { SejalComponent } from './sejal/sejal.component';
import { TesterComponent } from './tester/tester.component';
import { SdfdsfsdfsdComponent } from './sdfdsfsdfsd/sdfdsfsdfsd.component';



@NgModule({
   declarations: [
      AppComponent,
      RegisterComponent,
      UserlistComponent,
      UpdateComponent,
      LoginComponent,
      ChangePasswordComponent,
      OtpComponent,
      SejalComponent,
      TesterComponent,
      SdfdsfsdfsdComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgbModule,
      NgbPaginationModule,
      NgbAlertModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot()
   ],
   providers: [
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
