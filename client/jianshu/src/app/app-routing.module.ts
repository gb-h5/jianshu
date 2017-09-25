/**
 * Created by 李慧 on 2017/9/14.
 */
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MyCollectionComponent } from './personal-center/my-collection/my-collection.component';
import { MyLikeComponent } from './personal-center/my-like/my-like.component';
import { PerIndexComponent } from './personal-center/per-index/per-index.component';
import { ConcrenComponent } from './concren/concren.component';

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { ArticleComponent } from './article/article.component';
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
    path: 'home',
    component: HomeComponent
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
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
  {
    path: 'concern',
    component: ConcrenComponent,
  },{
    path: 'article',
    component: ArticleComponent,
  }

];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export  class AppRoutingModule {}
