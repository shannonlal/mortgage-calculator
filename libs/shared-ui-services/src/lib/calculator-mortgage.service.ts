import { MortgageDetails, MortgageResult} from "@mortgage-calculator/models";
import axios, {AxiosResponse} from "axios";

// URL Definition
const CALCULATE_MORTGAGE_URL = `/api/graphql`;

const generateMortgageGraphQL = (mortgageInfo: MortgageDetails): string => {
    return `{
        "query":"  mutation calculate{
            calculateMortgage( inputData: {
                mortgageAmount: ${mortgageInfo.mortgageAmount},
                prepaymentAmount: ${mortgageInfo.prepaymentAmount},
                interestRate: ${mortgageInfo.interestRate},
                amortizationYear: ${mortgageInfo.amortizationYear},
                amortizationMonth: ${mortgageInfo.amortizationMonth},
                interestRateType: '${mortgageInfo.interestRateType}',
                paymentFrequency: ${mortgageInfo.paymentFrequency},
                term: ${mortgageInfo.term}
            }){
                monthlyPayment
                id
                creationDate
            }
        }\n","variables":{}}`
};

/**
 * The following function will make an API call to calculate the mortgage
 * @param baseUrl
 * @param mortgageInfo 
 * @returns Promise<MortgageResult>
 */
export const calculateMortgage = async ( baseUrl: string, mortgageInfo: MortgageDetails ): Promise<MortgageResult> => {
    const mortgageResult : AxiosResponse<MortgageResult> = await axios.post( `${baseUrl}${CALCULATE_MORTGAGE_URL}` );
    return mortgageResult.data;
};