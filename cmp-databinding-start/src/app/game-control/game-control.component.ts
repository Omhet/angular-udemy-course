import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  timer;
  time = 0;
  @Output() gameTicked = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStart(): void {
    if (this.timer) {
      return;
    }
    console.log('start');
    this.timer = setInterval(() => {
      this.gameTicked.emit(this.time++);
    }, 1000);
  }

  onStop(): void {
    console.log('stop');
    clearInterval(this.timer);
    this.timer = undefined;
    this.time = 0;
    this.gameStopped.emit();
  }
}
