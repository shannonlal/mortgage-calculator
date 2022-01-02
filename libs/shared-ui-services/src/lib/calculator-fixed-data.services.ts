import { AmortizationPeriod, InterestRate, PaymentFrequency, RateType, Term } from "@mortgage-calculator/models";
import axios, {AxiosResponse} from "axios";

// URL Definition
const GET_TERMS_URL = `/api/term`;
const GET_RATE_TYPES_URL = `/api/interest-rate/types`;
const GET_INTEREST_RATE_URL = `/api/interest-rate/`;
const GET_AMORTIZATION_PERIOD_URL = `/api/amortization`;
const GET_PAYMENT_FREQUENCY_URL = `/api/payment-frequency`;

/**
 * The following function will make a call to get the list of terms
 * @param connection 
 * @returns Array<Term>
 */
export const getTerms = async ( baseUrl: string ): Promise<Array<Term>> => {
    const terms: AxiosResponse<Array<Term>> = await axios.get( `${baseUrl}${GET_TERMS_URL}` );
    debugger;
    return terms.data;
};

/**
 * The following function will make a call to get the list of Rate Types
 * @param baseUrl 
 * @returns 
 */
export const getRateTypes = async ( baseUrl: string ): Promise<Array<RateType>> => {
    const rateTypes: AxiosResponse<Array<RateType>> = await axios.get( `${baseUrl}${GET_RATE_TYPES_URL}` );

    return rateTypes.data;
};

/**
 * The following function will get the interest rate based on the rate type
 * @param baseUrl 
 * @param rateType 
 * @returns 
 */
export const getInterestRate = async (baseUrl: string, rateType: string ): Promise<InterestRate> => {
    const rateTypes: AxiosResponse<InterestRate> = await axios.get( `${baseUrl}${GET_INTEREST_RATE_URL}${rateType}` );

    return rateTypes.data;
};

/**
 * The following method will get the amortization period
 * @param baseUrl 
 * @returns 
 */
export const getAmortizationPeriod = async (baseUrl: string): Promise<AmortizationPeriod> => {
    const amortizationPeriod: AxiosResponse<AmortizationPeriod> = await axios.get( `${baseUrl}${GET_AMORTIZATION_PERIOD_URL}` );

    return amortizationPeriod.data;
};

/**
 * The following method will get Payment Frequencies
 * @param baseUrl 
 * @returns 
 */
export const getPaymentFrequency = async (baseUrl: string ): Promise<Array<PaymentFrequency>> => {
    const paymentFrequencies: AxiosResponse<Array<PaymentFrequency>> = await axios.get( `${baseUrl}${GET_PAYMENT_FREQUENCY_URL}` );

    return paymentFrequencies.data;
}
