import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnergyCounterComponent } from './components/energy-counter/energy-counter.component';
import { CardCounterComponent } from './components/card-counter/card-counter.component';

import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    EnergyCounterComponent,
    CardCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5040203960829171',
      adSlot: 1653287041,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
