import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private backgroundColor: string;

  constructor() { }

  @HostBinding('style.background-color') get getBackgroundColor() {

    return this.backgroundColor;
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = '#FFA500';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '#FFFFE0';
  }

  @HostListener('click') onclick() {
    alert(123);
  }
}
