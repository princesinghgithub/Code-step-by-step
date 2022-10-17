import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
 alert:boolean=false
  constructor(private userservice:UserService) { }
  ngOnInit(): void {
    // this.userservice.getList
  }
  adresto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })
  restosubmit(data:any){
  this.userservice.adResto(data).subscribe((result)=>{
// console.log(result);
this.alert=true
  }),this.adresto.reset({})
  }
  closeAlert(){
    this.alert=false
  }
}
