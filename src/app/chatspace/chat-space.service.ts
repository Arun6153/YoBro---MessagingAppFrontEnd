import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class chatSpaceService {

  constructor(private http: HttpClient) { }
  chatSendUsersId(sendObject): Observable <any> {
    return this.http.post('http://127.0.0.1:8000/chatRegister',sendObject);
  }
}
