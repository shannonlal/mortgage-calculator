import { MortgageDetails, MortgageResult} from "@mortgage-calculator/models";
import axios, {AxiosResponse} from "axios";

// URL Definition
const CALCULATE_MORTGAGE_URL = `/api/graphql`;

interface GraphQResponse<T>  {
    data: {
        calculateMortgage:T
    }

}
export const generateMortgageGraphQL = (mortgageInfo: MortgageDetails)  => {
    const query =  `{
            calculateMortgage( inputData: {
              mortgageAmount: ${mortgageInfo.mortgageAmount},
              prepaymentAmount: ${mortgageInfo.prepaymentAmount},
              interestRate: ${mortgageInfo.interestRate},
              amortizationYear: ${mortgageInfo.amortizationYear},
              amortizationMonth:${mortgageInfo.amortizationMonth},
              interestRateType: "FIXED",
              paymentFrequency:${mortgageInfo.paymentFrequency},
              term: ${mortgageInfo.term}
            }){
              monthlyPayment
              id
              creationDate
              mortgageAmountPerMonth
              termPrincipleAmount
              termInterestAmount
              totalInterestInPeriod
              totalAmountInPeriod
            }
        }`;
    return query;
};

/**
 * The following function will make an API call to calculate the mortgage
 * @param baseUrl
 * @param mortgageInfo 
 * @returns Promise<MortgageResult>
 */
export const calculateMortgage = async ( baseUrl: string, mortgageInfo: MortgageDetails ): Promise<MortgageResult> => {

    const graphQLMutationQuery:string =  generateMortgageGraphQL( mortgageInfo );

    const data= {
        query: graphQLMutationQuery,
        headers: {
            'Content-Type': 'application/json'
            }
    };

    const mortgageResponse : AxiosResponse<GraphQResponse<MortgageResult>> = await axios.post( `${baseUrl}${CALCULATE_MORTGAGE_URL}`, data );
    const mortgageResult = mortgageResponse.data.data.calculateMortgage;
    return mortgageResult;
};