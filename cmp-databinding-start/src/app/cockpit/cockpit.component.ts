import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ServerData } from 'src/types';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<ServerData>();
  @Output()
  blueprintCreated = new EventEmitter<ServerData>();
  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(
    serverNameInput: HTMLInputElement,
  ) {
    this.serverCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(
    serverNameInput: HTMLInputElement,
  ) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
