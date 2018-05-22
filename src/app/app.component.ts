import { Component, ViewChild } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { Product } from './product/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(CartComponent) cart: CartComponent;
  onBuy($event: Product) {
    console.log('Product was added');
    this.cart.addProductToCart($event);
  }
}