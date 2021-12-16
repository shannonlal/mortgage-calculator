import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CalculatorInputComponent
  ],
  exports: [
    CalculatorInputComponent
  ],
})
export class CalculatorDisplayModule {}
