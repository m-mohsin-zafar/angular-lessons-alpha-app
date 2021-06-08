import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

@Input('cData')  filler: any;

  constructor() {
    this.filler = {
      title: 'TITLE',
      description: 'some description here...',
      button1Text: 'Learn something',
      button2Text: 'some reference',
      imgUrl: 'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
      isDark: false
    }
  }

  ngOnInit(): void {
  }

}
