import { Component, OnInit } from '@angular/core';
import { Counter } from 'src/app/Interface/counter';
import { AxieCounterService } from 'src/app/services/axie-counter.service';

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss']
})
export class CardCounterComponent implements OnInit {

  
  currentCard: number = 6;

  cardCounter: Counter = {used: 0, gain: 0, destroyed: 0};

  constructor(private axieCounterService: AxieCounterService) {
    this.axieCounterService.currentCardSub.subscribe( curCard => {
      this.currentCard = curCard;
    })

    this.axieCounterService.cardCounterSub.subscribe( cardCounter => {
      this.cardCounter = cardCounter;
    })
  }

  ngOnInit(): void {
  }

  energyCounterUsed(operation: string) {
    this.axieCounterService.energyCounterUsed(operation);
  }

  energyCounterGain(operation: string) {
    this.axieCounterService.energyCounterGain(operation);
  }

  energyCounterDestroy(operation: string) {
    this.axieCounterService.energyCounterDestroy(operation);
  }

  cardCounterUsed(operation: string) {
    this.axieCounterService.cardCounterUsed(operation);
  }

  cardCounterGain(operation: string) {
    this.axieCounterService.cardCounterGain(operation);
  }

  cardCounterDestroy(operation: string) {
    this.axieCounterService.cardCounterDestroy(operation);
  }

  validate(evt: any) {
    if (evt.key == 1) {
      return true;
    } else {
      return false;
    }
  }

}
