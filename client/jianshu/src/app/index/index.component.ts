import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../services/localStorage.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private localstorage: LocalStorage
  ) { }

  ngOnInit() {
    if(localStorage.getItem('token')) {
      console.log('已经登陆');
    }
  }

}
