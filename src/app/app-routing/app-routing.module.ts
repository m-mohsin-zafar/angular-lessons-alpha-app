import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "../landing/landing.component";
import {NotfoundComponent} from "../notfound/notfound.component";
import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";
import {UserPostsComponent} from "../user-posts/user-posts.component";
import {IndividualPostComponent} from "../individual-post/individual-post.component";

const routes: Routes = [
  {path: 'home', component: LandingComponent},
  {
    path: 'users/:id',
    component: UserPostsComponent,
    children: [
      {path: 'posts', component: IndividualPostComponent}
    ]
  },
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'index', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
