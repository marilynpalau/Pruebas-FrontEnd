import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../interfaces/user.interface';
import { MatPaginator } from '@angular/material/paginator';
import { ListService } from './list.service';
import { MatSort } from '@angular/material/sort';
import * as listActions from './redux/list.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['user', 'avatar', 'first_name', 'last_name', 'website', 'dob', 'email', 'address', 'phone'];
  dataSource = new MatTableDataSource<IUser>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private listService: ListService,
    private store: Store<IUser>,
    private router: Router
    ) { }

  ngOnInit() {
    this.listService.getUsers().subscribe(res => {
      this.dataSource.data = res.result;
    }, err => {
      console.log(err);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  goUserDetails(item) {
    this.store.dispatch(listActions.readUser({user: item}));
    this.router.navigate(['/profile']);
  }

}


