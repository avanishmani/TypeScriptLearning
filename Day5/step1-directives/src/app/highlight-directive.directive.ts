import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight("transparent");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
