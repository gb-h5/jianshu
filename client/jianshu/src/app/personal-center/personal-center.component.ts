import {Component} from '@angular/core';
import { GlobalPropertyService } from './../services/global-property.service';
import {UserServiceService} from './../services/user-service.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-personal-center',
  template: '<router-outlet></router-outlet>',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.css'],
  providers: []
})
export class PersonalCenterComponent {
  user: any;
  _nickname: any;
  followed: any;
  follower_count: number;
  fans: any;
  fans_count: number;
  blogs: any;
  blogs_count: number;
  like: any;
  like_count: number;
  collection: any;
  collection_count: number;
  constructor(
    private glo: GlobalPropertyService,
    private userSer: UserServiceService,

    private router: Router
  ) { }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    else {
      const that = this;
      that.userSer.getUser(token, function (result) {
        that.user = result.data;
        that._nickname = that.user[0].nickname;
        // console.log(that.user);
        // alert(result.userTel);
        that.glo.username = that._nickname;
      });
      that.userSer.getfollowed(token, function (result) {
        that.followed = result.data;
        that.follower_count = that.followed.length;
        // console.log(that.followed);
      });
      that.userSer.getfans(token, function (result) {
        that.fans = result.data || [];
        that.fans_count = that.fans.length;
        console.log(that.fans);
      });
      that.userSer.getPerBlog(token, function (result) {
        that.blogs = result.data;
        that.blogs_count = that.blogs.length;
        console.log(that.blogs);
      });
      that.userSer.getPerLike(token, function (result) {
        that.like = result.data;
        that.like_count = that.like.length;
        console.log(that.like);
      });
      that.userSer.getPerCollection(token, function (result) {
        that.collection = result.data;
        that.collection_count = that.collection.length;
        console.log(that.collection);
      });

    }
  }
  ngOnDestroy() {}


}
