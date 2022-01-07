import mockAxios from 'jest-mock-axios';
import { AxiosResponse } from 'axios';

import { generateMortgageGraphQL } from './calculator-mortgage.service';
import { MortgageDetails, RateType, Term } from '@mortgage-calculator/models';
import { getTerms } from './calculator-fixed-data.services';



describe('getTerms', () => {

  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });
  it('should be defined', () => {
    expect( generateMortgageGraphQL ).toBeDefined();
  });

  it('should get a list of multiple terms', async () =>{

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

    const grqphQLQuery: string = generateMortgageGraphQL( mortgageInfo );

    expect( grqphQLQuery ).toBeDefined();

  });

});