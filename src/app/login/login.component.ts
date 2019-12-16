import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  closeResult: string;

  constructor(public user: UserService,private modalService: NgbModal) { }

  ngOnInit() {
  }

  login(form){
    if (form.valid) {
      console.log(form.value);
      this.user.login(form.value);
  }
  else{
    console.log('Invalid credentials');
  }
  }

  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open_otp(otp){
    this.modalService.open(otp, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  onSubmit(form){
    console.log(form.value);
    this.user.ForgetPass(form.value);
  }

  otpSubmit(otp){
console.log(otp.value);
    this.user.otp(otp.value);

  }

}
