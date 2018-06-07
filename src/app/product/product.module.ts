import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from './service/product.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  providers: [ProductService],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule {}
