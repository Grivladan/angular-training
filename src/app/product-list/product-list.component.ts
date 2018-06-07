import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/model/product';
import { ProductService } from '../product/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onBuy: EventEmitter<Product> = new EventEmitter();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
