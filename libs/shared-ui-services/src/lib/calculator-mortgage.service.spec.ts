import mockAxios from 'jest-mock-axios';

import { calculateMortgage, generateMortgageGraphQL } from './calculator-mortgage.service';
import { MortgageDetails, MortgageResult, RateType } from '@mortgage-calculator/models';

jest.mock('axios');

describe('getTerms', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect( generateMortgageGraphQL ).toBeDefined();
  });

  it('should generate the grqphQL string', async () =>{

    const mortgageInfo: MortgageDetails = {
        mortgageAmount: 0,
        prepaymentAmount: 0,
        interestRate: 0,
        amortizationYear: 0,
        amortizationMonth: 0,
        interestRateType: RateType.FIXED,
        paymentFrequency: 0,
        term: 0
    }

    const graphQLQuery: string = generateMortgageGraphQL( mortgageInfo );
    expect( graphQLQuery ).toBeDefined();
  });

  it('should make api call to get graphql response', async () =>{

    const mortgageInfo: MortgageDetails = {
        mortgageAmount: 0,
        prepaymentAmount: 0,
        interestRate: 0,
        amortizationYear: 0,
        amortizationMonth: 0,
        interestRateType: RateType.FIXED,
        paymentFrequency: 0,
        term: 0
    }

    const t =  {
        "data": {
          "data":{
            "calculateMortgage": {
                "id":12319234243234234,
                "monthlyPayment": 1212.31,
                "creationDate": "2022-01-07T03:09:48.681Z",
                "mortgageAmountPerMonth": 1212.31,
                "termPrincipleAmount": 10000,
                "termInterestAmount": 3000,
                "totalInterestInPeriod": 400,
                "totalAmountInPeriod": 3000
            }
          }
        }
    };

    mockAxios.post.mockResolvedValueOnce(t);

    const morgageResult: MortgageResult = await calculateMortgage( 'http://localhost:8080', mortgageInfo );

    expect( morgageResult ).toBeDefined();

    expect( morgageResult.monthlyPayment ).toBe( 1212.31 );
  });


});