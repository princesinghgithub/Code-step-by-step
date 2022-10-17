import { Component } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  users:any
  constructor(private userservice:UserService){
    this.userservice.getUser().subscribe((data)=>{
      this.users=data
      console.log(this.users);
      
    })
  }


}
