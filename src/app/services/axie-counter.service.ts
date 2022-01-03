import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Counter } from '../Interface/counter';

@Injectable({
  providedIn: 'root'
})
export class AxieCounterService {

  currentRound: number = 1;
  currentEnergy: number = 3;
  currentCard: number = 6;

  energyCounter: Counter = {used: 0, gain: 0, destroyed: 0};
  cardCounter: Counter = {used: 0, gain: 0, destroyed: 0};


  currentRoundSub = new Subject<number>();
  currentEnergySub = new Subject<number>();
  currentCardSub = new Subject<number>();
  energyCounterSub = new Subject<Counter>();
  cardCounterSub = new Subject<Counter>();

  constructor() { }

  addCurrentEnergy() {
    this.currentEnergy = this.currentEnergy + 2;
    if (this.currentEnergy > 10) {
      this.currentEnergy = 10;
    }
  }

  addCurrentCard() {
    this.currentCard = this.currentCard + 3;

    if (this.currentCard > 12) {
      this.currentCard = 12;
    }
  }

  addCurrentRound() {
    this.currentRound++;

    this.currentRoundSub.next(this.currentRound);
  }

  resetCurrentRound() {
    this.currentRound = 1;

    this.currentRoundSub.next(this.currentRound);
  }

  setCurrentEnergy(newCurEnergy: number) {
    this.currentEnergy = newCurEnergy;
  }

  setCurrentCard(newCurCard: number) {
    this.currentCard = newCurCard;
  }

  resetEnergy() {
    this.currentEnergy = 3;
    this.currentEnergySub.next(this.currentEnergy);
  }

  resetCard() {
    this.currentCard = 6;
    this.currentCardSub.next(this.currentCard);
  }

  resetCounter() {
    this.energyCounter = {used: 0, gain: 0, destroyed: 0};
    this.cardCounter = {used: 0, gain: 0, destroyed: 0};

    this.energyCounterSub.next(this.energyCounter);
    this.cardCounterSub.next(this.cardCounter);
  }


  endTurn() {
    var energy = this.currentEnergy - this.energyCounter.used;
    var card = this.currentCard - this.cardCounter.used;
    
    if (this.energyCounter.gain > 0) {
      energy = energy + this.energyCounter.gain;
    }

    if (this.energyCounter.destroyed > 0) {
      for (let i = 0; i < this.energyCounter.destroyed; i++) {
        energy--;
      }
    }

    if (this.cardCounter.gain > 0) {
      card = card + this.cardCounter.gain;
    }

    if (this.cardCounter.destroyed > 0) {
      for (let i = 0; i < this.cardCounter.destroyed; i++) {
        card--;
      }
    }

    this.setCurrentCard(card);
    this.setCurrentEnergy(energy);


    this.resetCounter();
    this.addCurrentEnergy();
    this.addCurrentCard();
    this.addCurrentRound();

    this.currentEnergySub.next(this.currentEnergy);
    this.currentCardSub.next(this.currentCard);
  }


  newAxieCounter() {
    this.resetEnergy();
    this.resetCard()
    this.resetCounter();
    this.resetCurrentRound();
  }

  energyCounterUsed(operation: string) {
    if (operation == 'add') {
      if (this.currentEnergy - this.energyCounter.used > 0) {
        this.energyCounter.used++;
        this.cardCounter.used++;
      }
    } else {
      if (this.energyCounter.used > 0) {
        this.energyCounter.used--;
        this.cardCounter.used--;
      }
    }

    this.energyCounterSub.next(this.energyCounter);
    this.cardCounterSub.next(this.cardCounter);
  }

  energyCounterGain(operation: string) {
    if (operation == 'add') {
      this.energyCounter.gain++;
    } else {
      if (this.energyCounter.gain > 0) {
        this.energyCounter.gain--;
      }
    }

    this.energyCounterSub.next(this.energyCounter);
  }

  energyCounterDestroy(operation: string) {
    if (operation == 'add') {
      this.energyCounter.destroyed++;
    } else {
      if (this.energyCounter.destroyed > 0) {
        this.energyCounter.destroyed--;
      }
    }

    this.energyCounterSub.next(this.energyCounter);
  }

  cardCounterUsed(operation: string) {
    if (operation == 'add') {
      if (this.currentCard - this.cardCounter.used > 0) {
        this.cardCounter.used++;
      }
    } else {
      if (this.cardCounter.used > this.energyCounter.used) {
        this.cardCounter.used--;
      }
    }

    this.cardCounterSub.next(this.cardCounter);
  }

  cardCounterGain(operation: string) {
    if (operation == 'add') {
      this.cardCounter.gain++;
    } else {
      if (this.cardCounter.gain > 0) {
        this.cardCounter.gain--;
      }
    }

    this.cardCounterSub.next(this.cardCounter);
  }

  cardCounterDestroy(operation: string) {
    if (operation == 'add') {
      this.cardCounter.destroyed++;
    } else {
      if (this.cardCounter.destroyed > 0) {
        this.cardCounter.destroyed--;
      }
    }

    this.cardCounterSub.next(this.cardCounter);
  }

  
}
