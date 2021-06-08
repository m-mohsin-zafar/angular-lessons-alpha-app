import {Component, OnInit} from '@angular/core';
import {IPost} from "../ipost";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[] = [];

  constructor(private _postService: PostService) {
  }

  ngOnInit(): void {
    this._postService.getAll()
      .subscribe(response => {
        console.log(response)
        this.posts = response;
      })
  }

}
