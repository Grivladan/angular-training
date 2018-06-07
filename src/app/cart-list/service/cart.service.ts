import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../../cart-item/cart-item';
import { Product } from '../../product/model/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartTotalQuantitySubject = new BehaviorSubject<number>(0);
  onCartTotalQuantityChanges: Observable<number> = this.cartTotalQuantitySubject.asObservable();

  private cartTotalSumSubject = new BehaviorSubject<number>(0);
  onCartTotalSumChanges: Observable<number> = this.cartTotalSumSubject.asObservable();

  private cartItems: Array<CartItem> = [];
  cartSubject = new BehaviorSubject<CartItem[]>(null);
  cartChanges: Observable<CartItem[]> = this.cartSubject.asObservable();

  constructor() {
  }

  addProductToCart(product: Product): void {
    let cartItem = this.getCartItemByProduct(product);
    if (cartItem == null) {
      cartItem = {product : product, productQuantity : 1};
      this.cartItems.push(cartItem);
    } else {
      cartItem.productQuantity++;
    }

    this.updateCart();
  }

  getCartProducts() {
    return this.cartItems;
  }

  deleteCartItem(cartItem: CartItem) {
    const index = this.cartItems.indexOf(cartItem);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }

    this.updateCart();
  }

  resetCart() {
    this.cartItems = [];
    this.updateCart();
  }

  getCartTotalQuontity() {
    return this.cartItems.reduce(function(sum, current) {
      return sum + current.productQuantity;
    }, 0);
  }

  getCartTotalSum() {
    return this.cartItems.reduce(function(sum, current) {
      return sum + current.productQuantity * current.product.price;
    }, 0);
  }

  decreaseQuontity(product: Product) {
    const cartItem = this.getCartItemByProduct(product);
    if (cartItem != null && cartItem.productQuantity > 0) {
      cartItem.productQuantity--;
    }

    this.updateCart();
  }

  private getCartItemByProduct(product: Product) {
    return this.cartItems.find(x => x.product === product);
  }

  private updateCart(): void {
    this.cartSubject.next(this.cartItems);
    this.cartTotalSumSubject.next(this.getCartTotalSum());
    this.cartTotalQuantitySubject.next(this.getCartTotalQuontity());
  }
}
