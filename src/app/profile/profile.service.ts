import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { url } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser(id): Observable<IUser> {
    console.log('service run');
    const params = new HttpParams({ fromString: '_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X'});
    return this.http.get<IUser>(url + '/' + id, { params });
  }

}
