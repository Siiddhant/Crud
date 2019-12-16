import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  serverName;
  constructor(public user: UserService, public http: HttpClient) { }

  ngOnInit() {
this.user.getData();
  }

  delete(id){
console.log(id);
this.user.deleteData(id)
}

 edit(id){
console.log(id);

localStorage.setItem('editId',id);
    this.user.editData();
}

  OnInput(event: any) {
    this.serverName = event.target.value;
    console.log(this.serverName);

  }

}
