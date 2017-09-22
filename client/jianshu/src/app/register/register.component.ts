import { Component, OnInit } from '@angular/core';
import {GlobalPropertyService} from './../services/global-property.service';
import {UserServiceService} from './../services/user-service.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register_res: string;

  constructor(
    private glo: GlobalPropertyService,
    private userSer: UserServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.glo.hiddenNavs = false;
    console.log('init' + this.glo.hiddenNavs);
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = true;

  }
  toRegister(login_form){
    let that = this;
    that.userSer.register(login_form.form.value, function (result) {
      console.log(login_form.form.value);
      // alert("here"+result.code)
      if(result.success === true) {
        sessionStorage.setItem('token',result.token)
        alert(sessionStorage.getItem('token'))
        that.router.navigate(['/home']);
      }else {

        that.register_res = '注册失败';
        alert(result.message);
      }
    });
  }
}
