import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';
import { FontChangeDirective } from './directives/font-change.directive';
import { OrderByPipe } from '../pipes/order-by.pipe';


@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective,
    FontChangeDirective,
    OrderByPipe
  ],
  providers: [],
  exports: [
    HighlightDirective,
    FontChangeDirective,
    OrderByPipe
  ]
})
export class SharedModule {}
