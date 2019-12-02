import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { IUser } from '../interfaces/user.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  id = null;

  constructor(
    private profileService: ProfileService,
    private store: Store<any>
    ) { }

  ngOnInit() {
    this.store.select('list').subscribe(user => {
      /* this.id = user; */
      this.user = user;
    });
    /* this.getUser(); */
  }

  getUser() {
    this.profileService.getUser(this.id).subscribe(res => {
      this.user = res;
    });
  }

}
