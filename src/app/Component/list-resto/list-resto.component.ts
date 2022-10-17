import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  collections:any=[]
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getList().subscribe((result)=>{
this.collections=result
console.log(result);
    })
  }
  deleteResto(item:any){
    console.log(this.collections);
  this.userservice.deleteResto(item).subscribe((result)=>{
this.collections.splice(item-1,1)
  })
    
  }
}
