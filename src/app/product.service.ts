import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Iproduct} from "./iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = 'https://gorest.co.in/public-api/products'

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get<Iproduct[]>(this._url);
  }
}
