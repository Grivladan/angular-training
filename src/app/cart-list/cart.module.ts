import { CartService } from '../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartListComponent } from './cart-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CartItemComponent,
    CartListComponent,
  ],
  providers: [CartService],
  exports: [
    CartItemComponent,
    CartListComponent
  ]
})
export class CartModule {}
