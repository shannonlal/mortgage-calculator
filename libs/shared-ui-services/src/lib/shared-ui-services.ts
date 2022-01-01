import { RateType, Term } from "@mortgage-calculator/models";
import axios from "axios";

// URL Definition
const GET_TERMS_URL = `/api/term`;
const GET_RATE_TYPES = `/api/interest-rate/types`;

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
    const rateTypes: Array<RateType> = await axios.get( `${baseUrl}${GET_RATE_TYPES}` );

    return rateTypes;
}
