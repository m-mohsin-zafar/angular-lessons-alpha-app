import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {IUser} from "../IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  user: IUser;
  malePlaceholder = 'assets/images/male.jpeg';
  femalePlaceholder = 'assets/images/female.jpg';

  constructor(private _usersService: UsersService, private _route: ActivatedRoute, private _router: Router) {
    this.user = {
      id: 0,
      name: 'John Doe',
      gender: 'Male',
      email: 'xyz@example.com'
    }
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      let userId: number;
      userId = parseInt(<string>params.get('id'));
      this._usersService.getUser(userId).subscribe(
        (user) => {
          this.user = user;
        }
      )
    })
  }

  seePosts(): void {
    this._router.navigate(
      ['posts'],
      {relativeTo: this._route}
    )
  }
}
