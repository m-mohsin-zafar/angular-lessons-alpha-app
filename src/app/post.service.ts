import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPost} from "./ipost";
// RxJs : Reactive Extension to JavaScript
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";
import {AppError} from "./commons/app-error";
import {NotFoundError} from "./commons/not-found-error";
import {subscribeToPromise} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  /*
    This service contains all CRUD operations regarding
    the resource 'post'
   */

  private url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _http: HttpClient) {
  }

  // Read Operation
  getPost(pId: number) {
    let searchParams = new HttpParams({
      fromObject: {
        id: pId
      }
    });
    return this._http.get<IPost[]>(
      this.url,
      {observe: "body", params: searchParams}
    )
  }

  // Read Operation
  getPosts() {
    return this._http.get<IPost[]>(
      this.url,
      {observe: "body"}
    ).pipe(
      retry(3)
    )
  }

  // Create Operation
  createPost(post: IPost) {
    return this._http.post(
      this.url,
      JSON.stringify(post),
      {observe: "response"}
    );
  }

  // Delete Operation
  deletePost(id: number) {
    return this._http.delete(
      this.url + '/' + id,
      {observe: "response"}
    )
  }

  // Update Operation
  updatePost(post: IPost) {
    return this._http.put(
      this.url + '/' + post.id, // change this to 397 or any number greater than 100 to generate error
      JSON.stringify(post),
      {observe: "response"}
    ).pipe(
      catchError((err: Response) => {
        if (err.status === 500){
          return throwError(new NotFoundError(err));
        }
        return throwError(new AppError(err));
      })
    )
  }
}
