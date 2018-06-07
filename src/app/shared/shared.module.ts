import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';
import { FontChangeDirective } from './directives/font-change.directive';


@NgModule({
  imports: [CommonModule],
  declarations: [
    HighlightDirective,
    FontChangeDirective
  ],
  providers: [],
  exports: [
    HighlightDirective,
    FontChangeDirective
  ]
})
export class SharedModule {}
