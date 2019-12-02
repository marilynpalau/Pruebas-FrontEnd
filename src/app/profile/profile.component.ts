import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ProfileService } from './profile.service';
import { IUser } from '../interfaces/user.interface';
import { Store } from '@ngrx/store';
import * as listActions from '../list/redux/list.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit, OnDestroy {

  user: IUser;
  id = null;

  constructor(
    private profileService: ProfileService,
    private store: Store<any>
    ) { }

  ngOnInit() {
    this.store.select('list').subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.store.dispatch(listActions.clearUser());
  }

  getUser() {
    this.profileService.getUser(this.id).subscribe(res => {
      this.user = res;
    });
  }

}
