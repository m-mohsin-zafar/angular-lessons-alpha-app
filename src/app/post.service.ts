import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPost} from "./ipost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  /*
    This service contains all CRUD operations regarding
    the resource 'post'
   */

  url: string = 'https://jsonplaceholder.typicode.com/posts'

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
      this.url + '/' + post.id,
      JSON.stringify(post),
      {observe: "response"}
    )
  }
}
