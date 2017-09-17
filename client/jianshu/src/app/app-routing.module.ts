/**
 * Created by 李慧 on 2017/9/14.
 */
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MyCollectionComponent } from './personal-center/my-collection/my-collection.component';
import { MyLikeComponent } from './personal-center/my-like/my-like.component';
import { PerIndexComponent } from './personal-center/per-index/per-index.component';

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
    component: IndexComponent
  },
  {
    path: 'PersonalCenter',
    component: PersonalCenterComponent,
    children: [
      {
        path: 'collection',
        component: MyCollectionComponent,
      },
      {
        path: 'like',
        component: MyLikeComponent,
      },
      {
        path: 'perindex',
        component: PerIndexComponent,
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export  class AppRoutingModule {}
