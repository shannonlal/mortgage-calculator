import { AmortizationPeriod, InterestRate, PaymentFrequency, RateType, Term } from "@mortgage-calculator/models";
import {getAmortizationPeriod, getInterestRate, getPaymentFrequency, getTerms} from './calculator-input-form.mock';

export interface IMortgageInitialParameters {
    interestRate: InterestRate,
    amortizationPeriod: AmortizationPeriod,
    paymentFrequencies: PaymentFrequency[],
    terms: Term[]
};

/**
 * The following function will get initial data
 * @param rateType 
 */
export const loadMortgageInitialParameters = async ( rateType: RateType =RateType.FIXED ): Promise<IMortgageInitialParameters> =>{
    try {
        const terms: Term[] = await getTerms();
        const interestRate:InterestRate = await getInterestRate( rateType);
        const amortizationPeriod: AmortizationPeriod = await getAmortizationPeriod();
        const paymentFrequencies: PaymentFrequency[] = await getPaymentFrequency();

        return {
            terms,
            interestRate,
            amortizationPeriod,
            paymentFrequencies,
        };
    }catch( err ){
        throw err;
    }
};