import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Component/registration/registration.component';
import { LoginComponent } from './Component/login/login.component';
import { AddRestoComponent } from './Component/add-resto/add-resto.component';
import { ListRestoComponent } from './Component/list-resto/list-resto.component';
import { UpdateRestoComponent } from './Component/update-resto/update-resto.component';
const routes: Routes = [
  {
    path:"register",component:RegistrationComponent
  },
  {
    path:"add",component:AddRestoComponent
  },
  {
    path:"update/:id",component:UpdateRestoComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",component:ListRestoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
