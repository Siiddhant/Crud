import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "url";

  httpOptions: any

  usersList: any = [];
  List: any = [];
  edit: any = [];

  token: any;
  validEmail = '';
  // CheckMsg='  ';
  constructor(public http: HttpClient, private toastr: ToastrService, private router: Router, private modalService: NgbModal) { }



  getData() {
    var token = localStorage.getItem('token');

    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': token
      })
    }

    this.http.get('http://192.168.1.86:8000/getdata', this.httpOptions).subscribe(data => {
      console.log(data);
      this.usersList = data['data'];
    })
  }




  login(LoginForm) {
    console.log(LoginForm);
    this.http.post('http://192.168.1.86:8000/login', LoginForm).subscribe(res => {
      console.log(res);
      var token = res['token'];
      localStorage.setItem('token', token);

      console.log(this.token);

      if (res['status'] == "Success") {
        this.toastr.success('Login Successfull', '', {
          timeOut: 3000
        });
        this.getData();
        this.router.navigate(['/userList']);
      }
      else {
        this.toastr.error('Invalid Email or Password', '', {
          timeOut: 3000
        });
      }
    })
  }

  ForgetPass(form) {
    console.log(form);
    this.http.post('http://192.168.1.86:8000/forgot', form).subscribe(res => {
      console.log(res);
      // this.CheckMsg = res['msg'];
      if (res['msg'] == 'No record found') {
        this.toastr.error('Incorrect email address', '', {
          timeOut: 3000
        });
        // this.CheckMsg ='';

      }
      else {
        if (form.email == '') {
          this.router.navigate(['/login']);
        }
        else {
          this.validEmail = form.email;
          console.log(this.validEmail);
          this.toastr.success('OTP has been sent to your registered email address.', '', {
            timeOut: 4000
          });
          // this.validEmail = '';
          this.router.navigate(['/otp']);
        }

      }
    })
  }

  otp(otp) {
    this.http.post('http://192.168.1.86:8000/otp', otp).subscribe(res => {
      console.log(res);
      if (res['msg'] == 'No Match') {
        this.toastr.error('Invalid OTP', '', {
          timeOut: 4000
        });
        this.validEmail = '';
      }
      else {
        this.toastr.success('Password Reset Successfull', '', {
          timeOut: 4000
        });
        this.validEmail = '';
        this.router.navigate(['/change-password']);
      }

    })
  }

  changePassword(pass) {
    console.log(pass);
    this.http.post('http://192.168.1.86:8000/changePass', pass).subscribe(res => {
      console.log(res);
      if (res['msg'] == 'Password changed successful') {
        this.toastr.success('Password Changed Successfully', '', {
          timeOut: 3000
        });
      }
      else {
        this.toastr.warning('Please enter your email', '', {
          timeOut: 3000
        });
      }
      this.validEmail = '';
      this.router.navigate(['/login']);
    })


  }

  addData(addForm) {
    console.log(addForm);

    this.http.post('http://192.168.1.86:8000/add', addForm).subscribe(res => {
      console.log(res);
      if (res['msg'] == "Already Exist") {
        this.toastr.warning('Email Already Exist', '', {
          timeOut: 3000
        });
      }
      else {
        this.toastr.success('Record Inserted Successfully', '', {
          timeOut: 3000
        });
        this.router.navigate(['/login']);
      }
    })
  }

  deleteData(id) {
    console.log(id);

    this.http.delete('http://192.168.1.86:8000/delete?id=' + id).subscribe(res => {
      console.log(res);
      this.toastr.success('Record Deleted Successfully', '', {
        timeOut: 3000
      });
      this.getData();
      this.router.navigate(['/userList']);
    });
  }

  editData() {
    var id = localStorage.getItem('editId');
    this.http.get('http://192.168.1.86:8000/edit?id=' + id).subscribe(res => {
      console.log(res['data']);
      this.edit = res['data'];
    });
  }

  updateData(form) {
    console.log(form);
    this.http.post('http://192.168.1.86:8000/update', form).subscribe(res => {
      console.log(res);
      this.getData();
      this.toastr.success('Saved Changes Successfully', '', {
        timeOut: 3000
      });
      this.router.navigate(['/userList']);
    })
  }

}

