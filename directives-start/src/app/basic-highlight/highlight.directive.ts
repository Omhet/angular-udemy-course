import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {

  }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.background = 'tomato';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
