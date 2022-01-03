/**
 * The following is a temporary mock file for generating data
 */
import { AmortizationPeriod, InterestRate, PaymentFrequency, RateType, Term } from "@mortgage-calculator/models";

/**
 * 
 * @returns 
 */
export const getTerms = async():Promise<Term[]> => {
    return Promise.resolve(
        [
            {
                "label": "1 Year",
                "value": 1
            },
            {
                "label": "2 Years",
                "value": 2
            },
            {
                "label": "3 Years",
                "value": 3
            },
            {
                "label": "4 Years",
                "value": 4
            }
        ]
    );
};

/**
 * 
 * @returns 
 */
 export const getRateTypes = async():Promise<string[]> => {
    return Promise.resolve(
        [
            "FIXED",
            "VARIABLE"
        ]
    );
};

/**
 * 
 * @returns 
 */
 export const getInterestRate = async( rateType: RateType):Promise<InterestRate> => {

    const interestRate: InterestRate = {
        type: RateType.FIXED,
        rate: 2.01
    }

    return Promise.resolve( interestRate );
};

/**
 * 
 * @returns 
 */
export const getAmortizationPeriod = async():Promise<AmortizationPeriod> => {

    return Promise.resolve( 
        {
            "months": [
                {
                    "label": "1 Month",
                    "value": 1
                },
                {
                    "label": "2 Months",
                    "value": 2
                },
                {
                    "label": "3 Months",
                    "value": 3
                }
            ],
            "years": [
                {
                    "label": "1 Year",
                    "value": 1
                },
                {
                    "label": "2 Years",
                    "value": 2
                },
                {
                    "label": "3 Years",
                    "value": 3
                },
                {
                    "label": "4 Years",
                    "value": 4
                }
            ]
        }
    )
};

export const getPaymentFrequency = async(): Promise<PaymentFrequency[]> => {
    return Promise.resolve(
        [
            {
                "label": "Weekly",
                "value": 52
            },
            {
                "label": "Accelerated Bi-Weekly",
                "value": 26
            },
            {
                "label": "Semi-Monthly",
                "value": 24
            },
            {
                "label": "Monthly",
                "value": 12
            }
        ]
    )
}