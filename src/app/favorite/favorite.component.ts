import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {SampleService} from "../sample.service";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isClicked']
  // outputs: ['change']
})
export class FavoriteComponent implements OnInit {
  @Input('isFav') isClicked: boolean;
  @Output('changeEvent') change = new EventEmitter();

  constructor(private _service: SampleService) {
    this.isClicked = false;
  }

  ngOnInit(): void {
    this._service.getAll().subscribe(response => {
      console.log(response);
    })
  }

  onFavClicked(): void {
    console.log('Prev State: ', this.isClicked);
    this.isClicked = !this.isClicked;
    console.log('Curr State: ', this.isClicked);
    this.change.emit({favState: this.isClicked});
  }
}
