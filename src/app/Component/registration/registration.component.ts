import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
title="Registration Form"
alert:boolean=false
  constructor(private userservice:UserService) { }
 
  ngOnInit(): void {
  }
  regForm=new FormGroup({
    name:new FormControl('',),
    email:new FormControl(''),
    password:new FormControl()
  })
 
  registration(data:any){
    this.userservice.RegisterUser(data).subscribe((result)=>{
console.log(result);
this.alert=true

    })
  }
  closeAlert(){
    this.alert=false
  }
}
