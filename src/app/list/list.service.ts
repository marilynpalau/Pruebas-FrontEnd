import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url = 'https://gorest.co.in/public-api/users?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IResult> {
    console.log('service run');
    return this.http.get<IResult>(this.url);
  }
}
