import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorDisplayModule } from '@mortgage-calculator/calculator-display';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CalculatorDisplayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
