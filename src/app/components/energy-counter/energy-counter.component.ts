import { Component, OnInit } from '@angular/core';
import { Counter } from 'src/app/Interface/counter';
import { AxieCounterService } from 'src/app/services/axie-counter.service';

@Component({
  selector: 'app-energy-counter',
  templateUrl: './energy-counter.component.html',
  styleUrls: ['./energy-counter.component.scss']
})
export class EnergyCounterComponent implements OnInit {

  currentEnergy: number = 3;

  energyCounter: Counter = {used: 0, gain: 0, destroyed: 0};
  

  constructor(private axieCounterService: AxieCounterService) {
    this.axieCounterService.energyCounterSub.subscribe( (energyCounter) => {
      this.energyCounter = energyCounter;
    })

    this.axieCounterService.currentEnergySub.subscribe((curEnergy) => {
      this.currentEnergy = curEnergy;
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

}
