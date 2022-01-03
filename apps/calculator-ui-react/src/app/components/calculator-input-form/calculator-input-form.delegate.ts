import { AmortizationPeriod, InterestRate, PaymentFrequency, RateType, Term } from "@mortgage-calculator/models";
import { fetchAmoritizationPeriod, fetchInterestRate, fetchPaymentFrequency, fetchRateTypes, fetchTerms } from "../../store/fixeddata/fixedData.effect";

export interface IMortgageInitialParameters {
    interestRate?: InterestRate,
    amortizationPeriod?: AmortizationPeriod,
    paymentFrequencies?: PaymentFrequency[],
    terms?: Term[]
};

/**
 * The following function will get initial data
 * @param rateType 
 */
export const loadMortgageInitialParameters = async ( rateType: RateType =RateType.FIXED ): Promise<void> =>{

    await fetchTerms();
    await fetchRateTypes();
    await fetchAmoritizationPeriod();
    await fetchPaymentFrequency();
    await fetchInterestRate( 'FIXED' );
};