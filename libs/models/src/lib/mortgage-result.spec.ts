import { MortgageResult } from './mortgage-result';

describe('MortgageResult', () => {
  it('should validate interface MortgageResult', () => {
    const mortgageResult: MortgageResult = {
        monthlyPayment: 1231123.01,
        id: "1231233213",
        creationDate: new Date().toISOString(),
        mortgageAmountPerMonth: 100000,
        termPrincipleAmount: 1300,
        termInterestAmount: 6000,
        totalInterestInPeriod: 300,
        totalAmountInPeriod: 98723
    };
    expect(mortgageResult).toBeDefined();
    expect(mortgageResult.monthlyPayment).toBe(1231123.01);
  });
});
