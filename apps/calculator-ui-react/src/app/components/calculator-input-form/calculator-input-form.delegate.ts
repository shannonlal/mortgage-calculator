import { AmortizationPeriod, InterestRate, PaymentFrequency, RateType, Term } from "@mortgage-calculator/models";
import { fetchAmoritizationPeriod, fetchInterestRate, fetchPaymentFrequency, fetchRateTypes, fetchTerms } from "../../store/fixeddata/fixedData.effect";
// import {getAmortizationPeriod, getInterestRate, getPaymentFrequency, getTerms} from './calculator-input-form.mock';

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
    /*const terms: Term[] = await getTerms();
    const interestRate:InterestRate = await getInterestRate( rateType);
    const amortizationPeriod: AmortizationPeriod = await getAmortizationPeriod();
    const paymentFrequencies: PaymentFrequency[] = await getPaymentFrequency();

    return {
        terms,
        interestRate,
        amortizationPeriod,
        paymentFrequencies,
    };*/

    await fetchTerms();
    await fetchRateTypes();
    await fetchAmoritizationPeriod();
    await fetchPaymentFrequency();
    await fetchInterestRate( 'FIXED' );
};