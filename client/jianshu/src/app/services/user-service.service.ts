import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable()
export class UserServiceService {
  constructor(
    private http: HttpClient
  ) { }


  register(user, callback) {
    this.http.post('/api/register', user ).subscribe(function(result){
      callback(result);
    });
  }

  login(user, callback) {
    this.http.post('/api/login', user ).subscribe(function(result){
      callback(result);
    });
  }

  getUser(token, callback) {
    let _head = new HttpHeaders({token: sessionStorage.getItem('token')});
    this.http.get('/api/getUser', {headers: _head}).subscribe(function (result) {
      callback(result);
    });
  }

  getBlog(callback) {
    this.http.get('/api/getBlog').subscribe(function (result) {
      callback(result);
    });
  }

  getCategory(callback) {
    this.http.get('/api/getCategory').subscribe(function (result) {
      callback(result);
    });
  }

  getPerBlog(token, callback) {
    let _head = new HttpHeaders({token: sessionStorage.getItem('token')});
    this.http.get('/api/getPerBlog', {headers: _head}).subscribe(function (result) {
      callback(result);
    });
  }


}


