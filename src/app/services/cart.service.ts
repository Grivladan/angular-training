import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Array<Product>;
  constructor() {
    this.cartProducts = new Array<Product>();
   }

  addProductToCart(product: Product): void {
    this.cartProducts.push(product);
  }

  getCartProducts() {
    return this.cartProducts;
  }

  removeProductFromCart(product: Product) {
    const index = this.cartProducts.indexOf(product);
    if (index > -1) {
      this.cartProducts.splice(index, 1);
    }
  }
}