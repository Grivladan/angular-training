import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../product/model/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Array<Product>;
  constructor(private cartService: CartService) {
    this.cartProducts = cartService.getCartProducts();
   }

  ngOnInit() {
  }

  addProductToCart(product: Product): void {
      this.cartService.addProductToCart(product);
  }

  removeProductFromCart(product: Product): void {
    this.cartService.removeProductFromCart(product);
  }
}