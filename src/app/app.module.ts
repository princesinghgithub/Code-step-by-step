import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { RegistrationComponent } from './Component/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRestoComponent } from './Component/add-resto/add-resto.component';
import { UpdateRestoComponent } from './Component/update-resto/update-resto.component';
import { LoginComponent } from './Component/login/login.component';
import { ListRestoComponent } from './Component/list-resto/list-resto.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    LoginComponent,
    ListRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
