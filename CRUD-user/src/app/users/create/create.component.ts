import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  createUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.createUser = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  createuser(){
    //console.log(this.createUser.value);
    this.userService.addUser(this.createUser.value).subscribe(res=>{
      this.createUser.reset();
      console.log(res);
    },
    err=>{
      console.log(err);
    }
    )
  }

}
