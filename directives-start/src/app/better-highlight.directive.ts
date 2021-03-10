import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';
  @HostBinding('style.background') background = this.defaultColor;

  constructor(private ref: ElementRef<HTMLElement>, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }
}
