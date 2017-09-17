import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { StartComponent } from './start/start.component';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';

import {PersonalCenterModule} from './personal-center/personal-center.module';

import {GlobalPropertyService} from './services/global-property.service';
import {UserServiceService} from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StartComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonalCenterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GlobalPropertyService, UserServiceService ,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
