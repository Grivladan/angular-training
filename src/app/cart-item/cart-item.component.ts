import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CartItem } from './cart-item';
import { CartService } from '../services/cart.service';
import { Product } from '../product/model/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getCartTotalSum() {
    return this.cartService.getCartTotalSum();
  }

  getCartTotalQuontity() {
    return this.cartService.getCartTotalQuontity();
  }

  decreaseQuontity(product: Product) {
    this.cartService.decreaseQuontity(product);
  }

  increaseQuontity(product: Product) {
    this.cartService.addProductToCart(product);
  }
}
