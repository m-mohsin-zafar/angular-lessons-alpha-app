import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {IUser} from "../IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] | null = [];
  malePlaceholder = 'assets/images/male.jpeg';
  femalePlaceholder = 'assets/images/female.jpg';
  page: number = 1;

  constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.queryParamMap.subscribe((params) => {
      this.page = parseInt(<string>params.get('page'));
      this.populateUsers(this.page);
    })
  }

  populateUsers(page?: number): void {
    this._userService.getUsers(page)
      .subscribe((users) => {
        this.users = users;
      })
  }

  pageNavigator(pageNumber: number): void {
    // Programmatically change the url
    this._router.navigate(
      ['/users'],
      {
        queryParams: {page: pageNumber}
      });
    // this.populateUsers(pageNumber);
    // window.scrollTo(0, 0)
  }
}
