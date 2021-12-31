import { Term } from "@mortgage-calculator/models";
import axios from "axios";

// URL Definition
const GET_TERMS_URL = `/api/term`;

/**
 * The following function will make a call to get the list of terms
 * @param connection 
 * @returns Array<Term>
 */
export const getTerms = async ( baseUrl: string ): Promise<Array<Term>> => {
    const terms: Array<Term> = await axios.get( `${baseUrl}${GET_TERMS_URL}` );

    return terms;
}
