import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product/model/product';
import { CartItem } from '../cart-item/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItem> = [];
  constructor() {
   }

  addProductToCart(product: Product): void {
    let cartItem = this.getCartItemByProduct(product);
    if (cartItem == null) {
      cartItem = {product : product, productQuontity : 1};
      this.cartItems.push(cartItem);
    } else {
      cartItem.productQuontity++;
    }
  }

  getCartProducts() {
    return this.cartItems;
  }

  deleteCartItem(cartItem: CartItem) {
    const index = this.cartItems.indexOf(cartItem);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartTotalQuontity() {
    return this.cartItems.reduce(function(sum, current) {
      return sum + current.productQuontity;
    }, 0);
  }

  getCartTotalSum() {
    return this.cartItems.reduce(function(sum, current) {
      return sum + current.productQuontity * current.product.price;
    }, 0);
  }

  decreaseQuontity(product: Product) {
    const cartItem = this.getCartItemByProduct(product);
    if (cartItem != null && cartItem.productQuontity > 0) {
      cartItem.productQuontity--;
    }
  }

  private getCartItemByProduct(product: Product) {
      return this.cartItems.find(x => x.product === product);
  }
}
