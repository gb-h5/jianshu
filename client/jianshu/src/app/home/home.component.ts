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
       alert(result.userTel);
      });

    }
    console.log(sessionStorage.getItem('token'));
  }

}
