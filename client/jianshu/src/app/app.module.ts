import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { StartComponent } from './start/start.component';

import { AppRoutingModule } from './app-routing.module';
import { PersonalCenterRoutingModule } from './personal-center/personal-center-routing.module';

import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';

import {PersonalCenterModule} from './personal-center/personal-center.module';

import {GlobalPropertyService} from './services/global-property.service';
import {UserServiceService} from './services/user-service.service';
import { LocalStorage } from './services/localStorage.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ConcrenComponent } from './concren/concren.component';
import { ArticleComponent } from './article/article.component';
// import { provideRoutes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StartComponent,
    IndexComponent,
    HomeComponent,
    SettingComponent,
    ConcrenComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonalCenterModule,
    AppRoutingModule,
    PersonalCenterRoutingModule,
    HttpClientModule
  ],
  providers: [GlobalPropertyService, UserServiceService , HttpClient, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
