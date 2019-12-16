import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
    this.user.editData();
  }

  edit(editForm){
    console.log(editForm.value);
    this.user.updateData(editForm.value);

  }

}
