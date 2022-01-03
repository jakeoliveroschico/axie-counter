import { Component } from '@angular/core';
import { AxieCounterService } from './services/axie-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'axie-counter';

  currentRound: number = 1;

  constructor(private axieCounterService: AxieCounterService) {
    this.axieCounterService.currentRoundSub.subscribe( (curRound) => {
      this.currentRound = curRound
    })
  }

  endTurn() {
    this.axieCounterService.endTurn();
  }

  resetCounter() {
    this.axieCounterService.resetCounter();
  }

  newAxieCounter() {
    this.axieCounterService.newAxieCounter();
  }
}
