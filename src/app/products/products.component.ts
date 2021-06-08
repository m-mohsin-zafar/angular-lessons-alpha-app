import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Iproduct} from "../iproduct";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Iproduct[] = [];

  constructor(private _prodService: ProductService) {
  }

  ngOnInit(): void {
    this._prodService.getProducts()
      .subscribe(response => {
        this.products = (response as any).data;
      })
  }

}
