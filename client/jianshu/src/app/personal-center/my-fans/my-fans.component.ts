import { Component, OnInit } from '@angular/core';
import { GlobalPropertyService } from './../../services/global-property.service';
import {UserServiceService} from './../../services/user-service.service';

import {Router} from '@angular/router';
@Component({
  selector: 'app-my-fans',
  templateUrl: './my-fans.component.html',
  styleUrls: ['./my-fans.component.css']
})
export class MyFansComponent implements OnInit {

  user: any;
  followed: any;
  categorys: any;
  _nickname: any;
  constructor(
    private userSer: UserServiceService,
    private glo: GlobalPropertyService,
    private router: Router
  ) { }

  ngOnInit() {
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


      that.userSer.getfans(token, function (result) {
        that.followed = result.data;
        console.log('hello>>>>>>>>>>'+that.followed);
      });
    }
  }

}
