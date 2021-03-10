import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
  deactivateActionsCount = 0;
  activateActionsCount = 0;

  deactivate() {
    this.deactivateActionsCount++;
    console.log('Deactivate actions', this.deactivateActionsCount);
  }

  activate() {
    this.activateActionsCount++;
    console.log('Activate actions', this.activateActionsCount);
  }
}
