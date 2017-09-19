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
      if(result.code === 1) {
        console.log('hello')
        that.router.navigate(['/index']);
      }else {
        alert(result.code);
        that.register_res = '注册失败';
        alert(that.register_res);
      }
    });
  }
}
