import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../services/localStorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private localstorage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

}
