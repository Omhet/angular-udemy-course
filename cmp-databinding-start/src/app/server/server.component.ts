import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  @Input()
  server: { type: string; name: string; content: string };
  @ViewChild('heading', { static: true }) heading: ElementRef<HTMLElement>;
  @ContentChild('serverElement', { static: true }) serverElement: ElementRef<HTMLParagraphElement>

  constructor() {
    console.log('constructor');
  }
  ngAfterViewInit(): void {
    console.log('on after view init');
    console.log('Text: ', this.heading.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('on after view checked');
  }
  ngAfterContentInit(): void {
    console.log('on after content init');
    console.log('Text Content: ', this.serverElement.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('on after content checked');
  }
  ngDoCheck(): void {
    console.log('on do check');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }

  ngOnInit(): void {
    console.log('on init');
    console.log('Text: ', this.heading.nativeElement.textContent);
  }
}
