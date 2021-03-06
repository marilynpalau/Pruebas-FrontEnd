import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult } from '../interfaces/user.interface';
import { url } from '../config';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IResult> {
    console.log('service run');
    const params = new HttpParams({ fromString: '_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X'});
    return this.http.get<IResult>(url, { params });
  }
}
