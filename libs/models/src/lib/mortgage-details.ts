import { RateType } from './interest-rate';

export interface MortgageDetails {
    mortgageAmount: number;
    prepaymentAmount: number;
    interestRate: number;
    amortizationYear: number;
    amortizationMonth: number;
    interestRateType: RateType;
    paymentFrequency: number;
    term: number;
};