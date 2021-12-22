export interface AmortizationYear  {
  label: string;
  year: number;
};

export interface AmortizationMonth {
  label: string;
  month: number;
}

export interface AmortizationPeriod {
  years: AmortizationYear[];
  months: AmortizationMonth[];
}
