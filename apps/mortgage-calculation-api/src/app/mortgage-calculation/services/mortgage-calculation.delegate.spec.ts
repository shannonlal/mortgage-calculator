

import { getPeriodInsterestPerYear, getPeriodInterestPerMonth, getTotalPeriodInterest } from './mortgage-calculation.delegate';

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

    it('get Total Period Interest should exist with different values', async() => {
        const mortgageAmount = 1000000;
        const prepaymentAmount = 10000;
        const interestRate = 5;
        const amortizationPeriodYear = 20;
        
        const totalPeriodInterest = getTotalPeriodInterest( mortgageAmount, prepaymentAmount, interestRate, amortizationPeriodYear);

        expect( totalPeriodInterest ).toBe( 990000 );
    });
  });

  describe('getTotalPeriodInterest', () => {
    it('get Total Period Interest should exist', async() => {
      expect(getTotalPeriodInterest).toBeDefined();
    });

    it('getPeriodInsterestPerYear', async() => {
        const totalPeriodInterest = 990000;
        const amortizationPeriodYear = 20;
        
        const periodInsterestPerYear = getPeriodInsterestPerYear( totalPeriodInterest, amortizationPeriodYear);

        expect( periodInsterestPerYear ).toBe( 49500 );
    });
  });

  describe('getPeriodInterestPerMonth', () => {
    it('get Total Period Interest should exist', async() => {
      expect(getPeriodInterestPerMonth).toBeDefined();
    });

    it('getPeriodInterestPerMonth', async() => {
        const periodInsterestPerYear = 49500;
        const amortizationPeriodYear = 12;
        
        const periodInsterestPerMonth = getPeriodInterestPerMonth( periodInsterestPerYear, amortizationPeriodYear);

        expect( periodInsterestPerMonth ).toBe( 4125 );
    });
  });
});
