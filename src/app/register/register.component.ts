import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  propertybind = false;
  constructor(public user: UserService, private toastr: ToastrService) {

    // setTimeout(() => {
    //   this.propertybind = true;
    // }, 5000);

   }

  ngOnInit() {
    this.user.editData();


    setTimeout(() => {
      this.propertybind = true;
    }, 5000);

  }


  add(addForm){
    console.log(addForm.value);

    if (addForm.valid) {

      this.user.addData(addForm.value)
    }
    else{
      this.toastr.warning('Fill all required fields',  '', {
        timeOut: 3000
      });
    }
  }
}
