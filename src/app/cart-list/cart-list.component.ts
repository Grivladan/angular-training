import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { CartService } from '../services/cart.service';
import { Product } from '../product/model/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Array<CartItem>;
  constructor(private cartService: CartService) {
   }

  ngOnInit() {
    this.cartItems = this.cartService.getCartProducts();
  }

  addProductToCart(product: Product): void {
      this.cartService.addProductToCart(product);
  }

  deleteCartItem(cartItem: CartItem): void {
    this.cartService.deleteCartItem(cartItem);
  }

  getCartTotalSum() {
    return this.cartService.getCartTotalSum();
  }

  getCartTotalQuontity() {
    return this.cartService.getCartTotalQuontity();
  }

  isEmptyCart(): boolean {
    return this.cartItems != null && this.cartItems.length > 0;
  }

}
