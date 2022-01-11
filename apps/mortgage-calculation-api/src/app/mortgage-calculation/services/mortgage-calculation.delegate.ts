
/**
 * The following function will calculate the total period interest
 * @param mortgageAmount 
 * @param interestRate 
 * @param amortizationPeriodYear 
 */
export const getTotalPeriodInterest = ( mortgageAmount: number, prepaymentAmount: number, interestRate: number, amortizationPeriodYear: number): number => {
    return ((mortgageAmount - prepaymentAmount) * interestRate * amortizationPeriodYear) / 100;
}
      
/**
 * 
 * @param totalPeriodInterest 
 * @param amortizationPeriodYear 
 * @returns 
 */
export const getPeriodInsterestPerYear = ( totalPeriodInterest: number, amortizationPeriodYear: number ): number => {
    return (totalPeriodInterest/amortizationPeriodYear);
}

/**
 * 
 * @param periodInsterestPerYear 
 * @param paymentFrequency 
 * @returns 
 */
export const getPeriodInterestPerMonth = (periodInsterestPerYear: number, paymentFrequency: number): number => {
    return (periodInsterestPerYear /paymentFrequency);
}

/**
 * 
 * @param totalPeriodInterest 
 * @param mortgageAmount 
 * @param prepaymentAmount 
 * @returns 
 */
export const getTotalAmountPerPeriod = ( totalPeriodInterest: number, mortgageAmount: number, prepaymentAmount: number ): number => {
    return ( Number(totalPeriodInterest)+ Number( mortgageAmount - prepaymentAmount ));
}
