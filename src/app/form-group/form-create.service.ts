import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {

  constructor(private http: HttpClient) { }
  
  createGroup(sendObject): Observable <any> {
    return this.http.post('http://127.0.0.1:8000/new-group',sendObject);
  }
}
