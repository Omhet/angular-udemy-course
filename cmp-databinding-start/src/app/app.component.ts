import { Component } from '@angular/core';
import { ServerData } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [];
  numbers = [];

  onAddServer({ name, content }: ServerData) {
    this.servers.push({
      type: 'server',
      name,
      content,
    });
  }

  onAddBlueprint({ name, content }: ServerData) {
    this.servers.push({
      type: 'blueprint',
      name,
      content,
    });
  }

  onGameTicked(time: number) {
    console.log(time);
    this.numbers.push(time)
  }

  onGameStopped() {
    this.numbers = [];
  }
}
