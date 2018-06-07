import { Directive, HostListener, Input, HostBinding, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontChangeDirective]'
})
export class FontChangeDirective implements OnInit {

  @Input() fontSize = '20px';
  private defaultSize: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.defaultSize = this.el.style.fontSize;
  }

  @HostListener('click') onClick() {
    const size = this.el.style.fontSize;
    if (size === this.defaultSize) {
      this.el.style.fontSize = this.fontSize;
    } else {
      this.el.style.fontSize = this.defaultSize;
    }
  }
}
