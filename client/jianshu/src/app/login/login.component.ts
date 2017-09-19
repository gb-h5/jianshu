import {Component, OnDestroy, OnInit} from '@angular/core';
import {GlobalPropertyService} from './../services/global-property.service';
import {UserServiceService} from './../services/user-service.service';
import { LocalStorage } from '../services/localStorage.service';


import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login_res: string;
  constructor(
    private glo: GlobalPropertyService,
    private userSer: UserServiceService,
    private router: Router,
    private localstorage: LocalStorage
  ) { }

  ngOnInit() {
    this.glo.hiddenNavs = false;
    console.log('init' + this.glo.hiddenNavs);
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = true;
  }

  tologin(login_form){
    let that = this;
    that.userSer.login(login_form.form.value, function (result) {
      console.log(login_form.form.value);
      if(result.code === 1) {

        //存储token到本地
        that.localstorage.set('token',result.token);
        alert('token'+that.localstorage.get('token'));
        that.router.navigate(['/index']);
      }else {
        alert(result.code);
        that.login_res = '用户名或密码错误';
      }
    });
  }

}
