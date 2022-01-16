export interface MortgageResult {
    id: string;
    monthlyPayment: number;
    creationDate: string;
    mortgageAmountPerMonth: number;
    termPrincipleAmount: number;
    termInterestAmount: number;
    totalInterestInPeriod: number;
    totalAmountInPeriod: number;
}