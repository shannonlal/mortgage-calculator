

import { getTotalPeriodInterest } from './mortgage-calculation.delegate';

describe('Mortgage Calculation Delegate', () => {

  describe('getTotalPeriodInterest', () => {
    it('get Total Period Interest should exist', async() => {
      expect(getTotalPeriodInterest).toBeDefined();
    });

    it('get Total Period Interest should exist', async() => {
        const mortgageAmount = 100000;
        const prepaymentAmount = 10000;
        const interestRate = 2;
        const amortizationPeriodYear = 10;
        
        const totalPeriodInterest = getTotalPeriodInterest( mortgageAmount, prepaymentAmount, interestRate, amortizationPeriodYear);

        expect( totalPeriodInterest ).toBe( 18000 );
      });
  });
});
