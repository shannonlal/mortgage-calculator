import { MortgageDetailsInput } from './mortgage-details.input';

describe('MortgageDetails', () => {
  it('should validate interface MortgageDetails', () => {
    const mortgageDetails: MortgageDetailsInput = {
      mortgageAmount: 100000,
      prepaymentAmount: 10000,
      interestRate: 2.00,
      amortizationYear: 5,
      amortizationMonth: 2,
      interestRateType: 'FIXED',
      paymentFrequency: 52,
      term: 5,
    };
    expect(mortgageDetails).toBeDefined();
    expect(mortgageDetails.interestRate).toBe(2.00);
  });
});
