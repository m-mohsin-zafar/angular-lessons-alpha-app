import {Component, OnInit} from '@angular/core';
import {IPost} from "../ipost";
import {PostService} from "../post.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from "@angular/forms";
import {AppError} from "../commons/app-error";
import {NotFoundError} from "../commons/not-found-error";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[] | null = [];
  closeResult = '';
  editForm = new FormGroup(
    {
      title: new FormControl(),
      body: new FormControl()
    }
  )
  postUpdateClicked = false;
  titlePlaceHolder = '';
  bodyPlaceHolder = '';

  constructor(private _postService: PostService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this._postService.getPosts()
      .subscribe((response) => {
        console.log(response)
        this.posts = response;
      })
  }

  createNewPost(postForm: any) {
    console.log(postForm.value);
    let newPostUserId = Math.floor(Math.random() * 1000) + 100;
    let newPost: IPost = {
      userId: newPostUserId,
      title: postForm.value.title,
      body: postForm.value.body
    };
    console.log(newPost);
    this._postService.createPost(newPost)
      .subscribe(
        (response) => {
          console.log(response.body);
          let newPostId: any = response.body;
          newPost.id = newPostId?.id;
          this.posts?.splice(0, 0, newPost)
        }
      )
  }

  deletePost(post: IPost){
    console.log(post);
    this._postService.deletePost((post.id as number))
      .subscribe(
      (response) => {
        console.log(response);
        let index: number = this.posts?.indexOf(post) as number;
        this.posts?.splice(index, 1);
      }
    )
  }

  updatePost(post: IPost, atIndex: number){
    this._postService.updatePost(post).subscribe(
      (response) => {
        console.log(response);
        if (this.posts) {
          this.posts[atIndex] = post;
        }
      }, (error: AppError) => {
        if (error instanceof NotFoundError){
          console.error(error);
          // replace logger services
        }
        else {
          console.error(error);
          console.error('Something Unexpected');
        }
      }
    )
  }

  open(content: any, post: IPost) {
    this.postUpdateClicked = true;
    this.titlePlaceHolder = post.title;
    this.bodyPlaceHolder = post.body;
    let index: number = this.posts?.indexOf(post) as number;
    console.log(post);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = "Closed with: Save Button";
      console.log(result?.value);
      let updatedPost: IPost = {
        id: post.id,
        userId: post.userId,
        body: result?.value?.body,
        title: result?.value?.title
      }
      console.log(updatedPost);

      this.updatePost(updatedPost, index);

      this.postUpdateClicked = false;
      this.titlePlaceHolder = '';
      this.bodyPlaceHolder = '';
      this.editForm.reset();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
