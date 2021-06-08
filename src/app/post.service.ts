import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "./ipost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get<IPost[]>(this.url)
  }
}
