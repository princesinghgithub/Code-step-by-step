import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
alert:boolean=false

  editresto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  constructor( private router:ActivatedRoute,private userservice:UserService) { }

  ngOnInit(): void {
  console.log(this.router.snapshot.params['id']);
  this.userservice.getCurrentResto(this.router.snapshot.params['id']).subscribe((result)=>{
console.log(result);
 this.editresto=new FormGroup({
  name:new FormControl(result.name),
  email:new FormControl(result.email),
  address:new FormControl(result.address)
})
  })
  
  }
  collection(){
    console.log("item",this.editresto.value);
  this.userservice.updateResto(this.router.snapshot.params['id'],this.editresto.value).subscribe(()=>{
this.alert=true
  })
    
  }closeAlert(){
    this.alert=false
  }

}
