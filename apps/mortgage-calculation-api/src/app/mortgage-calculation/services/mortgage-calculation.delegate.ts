
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

/**
 * 
 * @param mortgageAmount 
 * @param prepaymentAmount 
 * @param amortizationPeriodYear 
 * @param interestRate 
 * @returns 
 */
export const getMortgageAmountYear = (mortgageAmount: number, prepaymentAmount: number, amortizationPeriodYear: number, interestRate: number ): number => {
    const rst = ((mortgageAmount - prepaymentAmount) * 100) /
                (amortizationPeriodYear * 100 + interestRate * (amortizationPeriodYear * ((amortizationPeriodYear - 1) / 2)));

    return Math.round((rst + Number.EPSILON) * 100) / 100;
}

/**
 * 
 * @param mortgageAmountPerYear 
 * @param term 
 * @returns 
 */
export const getTermPrincipleAmount = (mortgageAmountPerYear: number, term: number) :number => {
    const termPrincipalAmount = (mortgageAmountPerYear * term);

    return Math.round((termPrincipalAmount + Number.EPSILON) * 100) / 100;
};

/**
 * 
 * @param periodInsterestPerYear 
 * @param term 
 * @returns 
 */
export const getTermInterestAmount = (periodInsterestPerYear: number, term: number): number => {
    return (periodInsterestPerYear * term );
};

export const getMortgageAmountPerMonth = (mortgageAmountPerYear: number, paymentFrequency: number ): number => {
    return ( mortgageAmountPerYear/paymentFrequency );
}

export const getPeriodInstallmentAmount = (mortgageAmountPerMonth: number, periodInsterestPerMonth:number ) => {
    return (mortgageAmountPerMonth + periodInsterestPerMonth);
}
