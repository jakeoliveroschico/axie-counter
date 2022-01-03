import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnergyCounterComponent } from './components/energy-counter/energy-counter.component';
import { CardCounterComponent } from './components/card-counter/card-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    EnergyCounterComponent,
    CardCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
