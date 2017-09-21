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
  constructor(
    private glo: GlobalPropertyService,
    private userSer: UserServiceService,

    private router: Router
  ) { }

  ngOnInit() {
    var token = sessionStorage.getItem('token')
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/login']);
    }

    else {
      let that = this;
      that.userSer.getUser(token, function (result) {
        that.user = result.data;
        that._nickname=that.user[0].nickname;
        console.log(that.user);
        // alert(result.userTel);
        that.glo.username = that._nickname;
      });

    }
  }
  ngOnDestroy() {

  }


}
