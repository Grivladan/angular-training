import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './model/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
