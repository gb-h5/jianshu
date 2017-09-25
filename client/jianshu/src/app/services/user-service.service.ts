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
  getPerLike(token, callback) {
    let _head = new HttpHeaders({token: sessionStorage.getItem('token')});
    this.http.get('/api/getPerLike', {headers: _head}).subscribe(function (result) {
      callback(result);
    });
  }
  getPerCollection(token, callback) {
    let _head = new HttpHeaders({token: sessionStorage.getItem('token')});
    this.http.get('/api/getPerCollection', {headers: _head}).subscribe(function (result) {
      callback(result);
    });
  }

  getfollowed(token, callback) {
    let _head = new HttpHeaders({token: sessionStorage.getItem('token')});
    this.http.get('/api/getfollowed', {headers: _head}).subscribe(function (result) {
      callback(result);
    });
  }

  getfans(token, callback) {
    let _head = new HttpHeaders({token: sessionStorage.getItem('token')});
    this.http.get('/api/getfans', {headers: _head}).subscribe(function (result) {
      callback(result);
    });
  }

  toArticle(id, callback) {
    // console.log('server>>>>>>>'+id)
    // let _head = new HttpHeaders({blogId: id});
    let param=new HttpParams().set('blogId',id);
    this.http.get('/api/toArticle', {params:param} ).subscribe(function(result){
      callback(result);
    });
  }


}


