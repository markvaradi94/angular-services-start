import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Set to Inactive count: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Set to active count: ' + this.inactiveToActiveCounter);
  }
}
