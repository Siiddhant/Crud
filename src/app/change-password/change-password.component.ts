import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
  }

  ChangePass(pass){
console.log(pass.value);
this.user.changePassword(pass.value);
  }

}
