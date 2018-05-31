import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective
  ],
  providers: [],
  exports: [
    HighlightDirective
  ]
})
export class SharedModule {}
