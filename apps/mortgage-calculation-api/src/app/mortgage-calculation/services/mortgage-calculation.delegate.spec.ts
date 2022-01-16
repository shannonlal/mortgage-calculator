

import { getMortgageAmountYear, getPeriodInsterestPerYear, getPeriodInterestPerMonth, getTotalAmountPerPeriod, getTotalPeriodInterest } from './mortgage-calculation.delegate';

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

  describe('getTotalAmountPerPeriod', () => {
    it('get Total Amount Per Period should exist', async() => {
      expect(getTotalAmountPerPeriod).toBeDefined();
    });

    it('getTotalAmountPerPeriod', async() => {
        const totalPeriodInterest = 519750;
        const mortgageAmount = 1000000;
        const prepaymentAmount = 10000;
        
        const totalAmountPerPeriod = getTotalAmountPerPeriod( totalPeriodInterest, mortgageAmount, prepaymentAmount);

        expect( totalAmountPerPeriod ).toBe( 1509750 );
    });
  });

  describe('getMortgageAmountYear', () => {
    it('get Mortgage Amount Year should exist', async() => {
      expect(getMortgageAmountYear).toBeDefined();
    });

    it('getMortgageAmountYear', async() => {
        const mortgageAmount = 1000000;
        const prepaymentAmount = 10000;
        const interestRate = 3.5;
        const amortizationPeriodYear = 15;
        
        const totalAmountPerPeriod = getMortgageAmountYear( mortgageAmount, prepaymentAmount, amortizationPeriodYear, interestRate);

        expect( totalAmountPerPeriod ).toBe( 53012.05 );
    });
  });
});
