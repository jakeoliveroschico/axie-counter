import { Component, ElementRef, ViewChild } from '@angular/core';
import { AxieCounterService } from './services/axie-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  switchTo = '';

  title = 'axie-counter';
  currentRound: number = 1;

  constructor(private axieCounterService: AxieCounterService) {
    this.axieCounterService.currentRoundSub.subscribe((curRound) => {
      this.currentRound = curRound
    })
  }

  endTurn() {
    this.axieCounterService.endTurn();
  }

  resetCounter() {
    this.axieCounterService.resetCounter();
  }

  setCurrentCard(cardInput: any) {
    if (cardInput.value.length > 0 && cardInput.value != 0) {
      var newCardCount = parseInt(cardInput.value) + 3;
      this.axieCounterService.setCurrentCard(newCardCount);
      this.axieCounterService.currentCardSub.next(newCardCount);
      cardInput.value = '';
    } else {
      cardInput.value = '';
    }

  }

  newAxieCounter() {
    this.axieCounterService.newAxieCounter();
  }

  toggleSetCard() {
    if (this.switchTo != '') {
      this.switchTo = '';
    } else {
      this.switchTo = 'set-card-info';
    }


  }




}
