import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

;

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get(this.url)
  }
}
