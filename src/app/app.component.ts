import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rcomps-app';
  books = ['alpha', 'beta']; // we are getting them from a service

  viewMode = "vA";

  sample = {
    uid: 1145,
    isFavorite: true
  };

  sampleObj: any;

  loadObj() {
    this.sampleObj = [
      {
        title: 'HTML',
        description: 'Language of the Web',
        button1Text: 'Learn HTML',
        button2Text: 'HTML Reference',
        imgUrl: 'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
        isDark: true
      },
      {
        title: 'PYTHON',
        description: 'Language of the Future',
        button1Text: 'Learn Python',
        button2Text: 'Python Reference',
        imgUrl: 'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
        isDark: false
      },
      {
        title: 'JavaScript',
        description: 'Most Awesome Web Language',
        button1Text: 'Learn JavaScript',
        button2Text: 'JavaScript Reference',
        imgUrl: 'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
        isDark: true
      },
      {
        title: 'C#',
        description: 'Object Oriented Language',
        button1Text: 'Learn C#',
        button2Text: 'C# Reference',
        imgUrl: 'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
        isDark: false
      }
    ]
  }

  addOne() {
    this.sampleObj.push(
      {
        title: 'GOlang',
        description: 'Object Oriented Language',
        button1Text: 'Learn C#',
        button2Text: 'C# Reference',
        imgUrl: 'https://image.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg',
        isDark: false
      }
    )
  }


  trackByTitle(index: number, obj: any){
    return obj ? obj.title : undefined;
  }

  removeObj(obj: any) {
    let indx = this.sampleObj.indexOf(obj);
    this.sampleObj.splice(indx, 1);
  }

  onFavStateChanged(obj: any): void {
    console.log('State Passed: ', obj);
  }
}
