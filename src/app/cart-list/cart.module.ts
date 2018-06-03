import { CartService } from '../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartListComponent } from './cart-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartItemComponent,
    CartListComponent,
  ],
  providers: [CartService],
  exports: [
    CartListComponent
  ]
})
export class CartModule {}
