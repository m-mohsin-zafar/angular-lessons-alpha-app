import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {

  areas = [
    {id: 40100, city: 'Sargodha'},
    {id: 45650, city: 'Nilore, ISB'},
    {id: 40000, city: 'Somewhere'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  log(x:any):void {
    console.log(x);
  }

  submitForm(x: any): void {
    console.log(JSON.stringify(x.value));
  }
}
