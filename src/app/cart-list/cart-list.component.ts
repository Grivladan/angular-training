import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';
import { Product } from '../product/model/product';
import { Subscription } from 'rxjs';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Array<CartItem>;
  cartTotalSum = 0;
  cartTotalQuontity = 0;

  private cartItemsSubscription: Subscription;
  private cartTotalQuantitySubscription: Subscription;
  private cartTotalSumSubscription: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.subscribeToCartChanges();
  }

  onResetCart() {
    this.cartService.resetCart();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
    this.cartTotalQuantitySubscription.unsubscribe();
    this.cartTotalSumSubscription.unsubscribe();
  }

  addProductToCart(product: Product): void {
      this.cartService.addProductToCart(product);
  }

  deleteCartItem(cartItem: CartItem): void {
    this.cartService.deleteCartItem(cartItem);
  }

  isEmptyCart(): boolean {
    return this.cartItems != null && this.cartItems.length > 0;
  }

  private subscribeToCartChanges(): void {
    this.subscribeToCartItemsChange();
    this.subscribeToCartTotalQuantityChange();
    this.subscribeToCartTotalSumChange();
  }

  private subscribeToCartItemsChange() {
    this.cartItemsSubscription = this.cartService.cartChanges.subscribe(
      (data: CartItem[]) => this.cartItems = data,
      (error) => console.log(error)
    );
  }

  private subscribeToCartTotalQuantityChange() {
    this.cartTotalQuantitySubscription = this.cartService.onCartTotalQuantityChanges.subscribe(
      (data: number) => this.cartTotalQuontity = data,
      (error) => console.log(error)
    );
  }

  private subscribeToCartTotalSumChange() {
    this.cartTotalSumSubscription = this.cartService.onCartTotalSumChanges.subscribe(
        (data: number) => this.cartTotalSum = data,
        (error) => console.log(error)
    );
  }
}
