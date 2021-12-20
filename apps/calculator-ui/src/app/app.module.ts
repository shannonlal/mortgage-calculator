import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { CalculatorServiceModule } from '@mortgage-calculator/calculator-service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CalculatorServiceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
