import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartListComponent } from './cart-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartService } from './service/cart.service';

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
