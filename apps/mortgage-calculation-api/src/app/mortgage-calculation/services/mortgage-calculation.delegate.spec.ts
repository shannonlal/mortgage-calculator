

import { 
    getMortgageAmountPerMonth,
    getMortgageAmountYear, 
    getPeriodInstallmentAmount, 
    getPeriodInsterestPerYear, 
    getPeriodInterestPerMonth, 
    getTermInterestAmount, 
    getTermPrincipleAmount, 
    getTotalAmountPerPeriod, 
    getTotalPeriodInterest } from './mortgage-calculation.delegate';

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

  describe('getTermPrincipleAmount', () => {
    it('get Term Principal Amount  exist', async() => {
      expect(getTermPrincipleAmount).toBeDefined();
    });

    it('getTermPrincipleAmount', async() => {
        const mortgagePerYear = 53012.05;
        const term = 10;
        const totalAmountPerPeriod = getTermPrincipleAmount( mortgagePerYear, term );

        expect( totalAmountPerPeriod ).toBe( 530120.5 );
    });
  });

  describe('getTermInterestAmount', () => {
    it('get Term Interest Amount exist', async() => {
      expect(getTermInterestAmount).toBeDefined();
    });

    it('getTermInterestAmount', async() => {
        const periodInterestPerYear = 34650;
        const term = 10;
        const totalAmountPerPeriod = getTermInterestAmount( periodInterestPerYear, term );

        expect( totalAmountPerPeriod ).toBe( 346500 );
    });
  });

  describe('getMortgageAmountPerMonth', () => {
    it('get Mortgage Amount Per Month', async() => {
      expect(getMortgageAmountPerMonth).toBeDefined();
    });

    it('getMortgageAmountPerMonth', async() => {
        const mortgageAmountPerYear = 53012.05;
        const paymentFrequency = 12;
        const mortgageAmountPerMonth = getMortgageAmountPerMonth( mortgageAmountPerYear, paymentFrequency );

        expect( mortgageAmountPerMonth ).toBe( 4417.67 );
    });
  });

  describe('getPeriodInstallmentAmount', () => {
    it('get Period Installment Amount', async() => {
      expect(getPeriodInstallmentAmount).toBeDefined();
    });

    it('getPeriodInstallmentAmount', async() => {
        const mortgageAmountPerMonth = 4417.67;
        const periodInterestPerMonth = 2887.5;
        const periodInstallmentAmount = getPeriodInstallmentAmount( mortgageAmountPerMonth, periodInterestPerMonth );

        expect( periodInstallmentAmount ).toBe( 7305.17 );
    });
  });
});
