import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class SignupService {

  constructor(private http: HttpClient) { }
  signUpUser(userData): Observable <any> {
    return this.http.post('http://127.0.0.1:8000/userRegister/',userData);
  }
}
