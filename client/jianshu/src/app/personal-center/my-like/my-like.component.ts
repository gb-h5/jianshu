import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './../../services/global-property.service';
import {UserServiceService} from './../../services/user-service.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-my-like',
  templateUrl: './my-like.component.html',
  styleUrls: ['./my-like.component.css']
})
export class MyLikeComponent implements OnInit {
  user: any;
  blogs: any;
  categorys: any;
  _nickname: any;
  constructor(
    private userSer: UserServiceService,
    private glo: GlobalPropertyService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('>>>>>>>'+this.glo.username)
    this._nickname = this.glo.username;
    var token = sessionStorage.getItem('token')
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/index']);
    }else {

      let that = this;
      // that.userSer.getUser(token, function (result) {
      //   that.user = result.data;
      //   console.log(that.user);
      //   // alert(result.userTel);
      // });


      that.userSer.getPerLike(token,function (result) {
        that.blogs = result.data;
        console.log(that.blogs);
      });
    }
  }
}

