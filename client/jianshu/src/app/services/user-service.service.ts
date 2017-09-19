import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
