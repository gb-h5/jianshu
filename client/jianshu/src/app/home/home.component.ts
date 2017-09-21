import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../services/localStorage.service';
import {UserServiceService} from './../services/user-service.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  blogs: any;
  categorys: any;
  _nickname: any;
  constructor(
    private userSer: UserServiceService,
    private localstorage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit() {
    var token = sessionStorage.getItem('token')
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/index']);
    }
    else{
      let that = this;
      that.userSer.getUser(token, function (result) {
        that.user = result.data;
        that._nickname=that.user[0].nickname;
        console.log(that.user);
       // alert(result.userTel);
      });


      that.userSer.getBlog(function (result) {
        that.blogs = result.data;
        console.log(that.blogs);
      });


      that.userSer.getCategory(function (result) {
        that.categorys = result.data;
        console.log(that.categorys);
      });


    }
    console.log(sessionStorage.getItem('token'));
  }

}
