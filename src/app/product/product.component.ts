import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './model/product';
import { ProductCategory } from './model/product-category';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  productCategory = ProductCategory;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
