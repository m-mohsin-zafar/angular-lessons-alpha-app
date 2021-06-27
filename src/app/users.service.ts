import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {IUser} from "./IUser";
// RxJs : Reactive Extension to JavaScript
import {catchError, map, retry} from "rxjs/operators";
import {throwError} from "rxjs";
import {NotFoundError} from "./commons/not-found-error";
import {AppError} from "./commons/app-error";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /*
    This service contains all CRUD operations regarding
    the resource 'user'
   */

  private url: string = 'https://gorest.co.in/public-api/users'

  constructor(private _http: HttpClient) {
  }

  // Read Operation
  getUser(id: number) {
    let exUrl = this.url + `/${id}`;
    return this._http.get<IUser>(
      exUrl,
      {observe: "response"}
    ).pipe(
      map((response: HttpResponse<any>) => {
        return response?.body?.data;
      })
    )
  }

  // Read Operation
  getUsers(page: number = 1) {
    let searchParams = new HttpParams({
      fromObject: {
        page: page as unknown as string,
      }
    });
    return this._http.get<IUser>(
      this.url,
      {
        params: searchParams,
        observe: "response"
      }
    )
      .pipe(
        map((response: HttpResponse<any>) => {
          return response?.body?.data;
        })
      )
  }

  // Create Operation
  createUser(user: IUser) {
    return this._http.post(
      this.url,
      JSON.stringify(user),
      {observe: "response"}
    );
  }

  // Delete Operation
  deleteUser(id: number) {
    return this._http.delete(
      this.url + '/' + id,
      {observe: "response"}
    )
  }

  // Update Operation
  updateUser(user: IUser) {
    return this._http.put(
      this.url + '/' + user.id, // change this to 397 or any number greater than 100 to generate error
      JSON.stringify(user),
      {observe: "response"}
    ).pipe(
      catchError((err: Response) => {
        if (err.status === 500) {
          return throwError(new NotFoundError(err));
        }
        return throwError(new AppError(err));
      })
    )
  }
}
