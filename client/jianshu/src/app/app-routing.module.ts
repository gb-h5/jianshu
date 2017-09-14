/**
 * Created by 李慧 on 2017/9/14.
 */
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

import { NgModule } from '@angular/core';
import {RouterModule, Route, Routes} from '@angular/router';
const  appRoute: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export  class AppRoutingModule {}
