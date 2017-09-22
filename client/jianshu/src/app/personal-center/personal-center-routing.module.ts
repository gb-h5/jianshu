/**
 * Created by 李慧 on 2017/9/14.
 */
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { MyLikeComponent } from './my-like/my-like.component';
import { PerIndexComponent } from './per-index/per-index.component';
import { PersonalCenterComponent } from './personal-center.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { MyFollowedComponent } from './my-followed/my-followed.component';
import { MyFansComponent } from './my-fans/my-fans.component';

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const  PerRoute: Routes = [
  {
    path: 'PersonalCenter',
    component: PersonalCenterComponent,
    children: [
      {
        path: '',
        redirectTo: 'myblog',
        pathMatch: 'full'
      },
      {
        path: 'collection',
        component: MyCollectionComponent,
      },
      {
        path: 'myblog',
        component: MyBlogComponent,
      },
      {
        path: 'myfollowed',
        component: MyFollowedComponent,
      },
      {
        path: 'myfans',
        component: MyFansComponent,
      },
      {
        path: 'mylike',
        component: MyLikeComponent,
      },
      {
        path: 'perindex',
        component: PerIndexComponent,
      }

    ]
  }]
@NgModule({
  imports: [RouterModule.forChild(PerRoute)],
  exports: [RouterModule]
})
export  class PersonalCenterRoutingModule {}
