import { Selectable } from "./selectable";

export interface AmortizationYear extends Selectable  {};

export interface AmortizationMonth extends Selectable {}

export interface AmortizationPeriod {
  years: AmortizationYear[];
  months: AmortizationMonth[];
}
