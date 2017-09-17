import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserServiceService {
  constructor(
    private http: HttpClient
  ) { }


  login(user, callback) {
    this.http.post('/api/users/login', user ).subscribe(function(result){
      callback(result);
    });
  }
}
