import { Component, ViewChild } from '@angular/core';
import { Product } from './product/model/product';
import { CartListComponent } from './cart-list/cart-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(CartListComponent) cart: CartListComponent;
  onBuy($event: Product) {
    console.log('Product was added');
    this.cart.addProductToCart($event);
  }
}
