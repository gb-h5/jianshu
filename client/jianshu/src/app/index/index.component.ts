import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../services/localStorage.service';
import {Router} from '@angular/router';
import {UserServiceService} from './../services/user-service.service';
import { GlobalPropertyService } from './../services/global-property.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  blogs: any;
  categorys: any;
  constructor(
    private userSer: UserServiceService,
    private localstorage: LocalStorage,
    private glo: GlobalPropertyService,
    private router: Router
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
    else {
      let that = this;

      that.userSer.getBlog(function (result) {
        that.blogs = result.data;
        console.log(that.blogs);
      });


      that.userSer.getCategory(function (result) {
        that.categorys = result.data;
        console.log(that.categorys);
      });


    }
  }
  toArticle(blogId){
    let that = this;
    // console.log( blogId );
    that.userSer.toArticle(blogId, function (result) {
      that.glo.article = result.data;
      // alert(result.userTel);
    });

  }

}

