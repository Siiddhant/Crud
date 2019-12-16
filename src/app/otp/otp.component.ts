import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {


  intervalId = 0;
  message = '';
  seconds = 30;

  clearTimer() { clearInterval(this.intervalId); }


  constructor(private router: Router,public user: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.start();

  }

  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    // this.message = `OTP Expired`;

    this.toastr.error('OTP Expired', '', {
      timeOut: 3000
    });

    this.router.navigate(['/login'])

  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Expired';
        this.stop();
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `Your OTP will be expired in ${this.seconds} seconds`;
      }
    }, 1000);
  }

  OneTimePass(otp){
    console.log(otp.value);

    this.user.otp(otp.value);
  }

}
