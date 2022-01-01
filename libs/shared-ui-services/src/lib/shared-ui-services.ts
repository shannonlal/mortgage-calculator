import { InterestRate, RateType, Term } from "@mortgage-calculator/models";
import axios from "axios";

// URL Definition
const GET_TERMS_URL = `/api/term`;
const GET_RATE_TYPES_URL = `/api/interest-rate/types`;
const GET_INTEREST_RATE_URL = `/api/interest-rate/`;

/**
 * The following function will make a call to get the list of terms
 * @param connection 
 * @returns Array<Term>
 */
export const getTerms = async ( baseUrl: string ): Promise<Array<Term>> => {
    const terms: Array<Term> = await axios.get( `${baseUrl}${GET_TERMS_URL}` );

    return terms;
}

/**
 * The following function will make a call to get the list of Rate Types
 * @param baseUrl 
 * @returns 
 */
export const getRateTypes = async ( baseUrl: string ): Promise<Array<RateType>> => {
    const rateTypes: Array<RateType> = await axios.get( `${baseUrl}${GET_RATE_TYPES_URL}` );

    return rateTypes;
}

/**
 * The following function will get the interest rate based on the rate type
 * @param baseUrl 
 * @param rateType 
 * @returns 
 */
export const getInterestRate = async (baseUrl: string, rateType: string ): Promise<InterestRate> => {
    const rateTypes: InterestRate = await axios.get( `${baseUrl}${GET_INTEREST_RATE_URL}${rateType}` );

    return rateTypes;
}