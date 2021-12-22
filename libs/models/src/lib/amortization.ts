import { Selectable } from "./selectable";

export type AmortizationYear = Selectable;

export type AmortizationMonth = Selectable

export interface AmortizationPeriod {
  years: AmortizationYear[];
  months: AmortizationMonth[];
}
