import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {BannerComponent} from './banner/banner.component';
import {CustomCardComponent} from './custom-card/custom-card.component';
import {PkPhoneFormatterDirective} from './pk-phone-formatter.directive';
import {ExampleFormComponent} from './example-form/example-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupFormComponent} from './signup-form/signup-form.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import * as bootstrap from "bootstrap";
import * as jQuery from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    BannerComponent,
    CustomCardComponent,
    PkPhoneFormatterDirective,
    ExampleFormComponent,
    SignupFormComponent,
    PostsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
