import { RateType } from '..';
import { MortgageDetails} from './mortgage-details';

describe('MortgageDetails', () => {
  it('should validate interface MortgageDetails', () => {
    const mortgageDetails: MortgageDetails = {
      mortgageAmount: 100000,
      prepaymentAmount: 10000,
      interestRate: 2.00,
      amortizationYear: 5,
      amortizationMonth: 2,
      interestRateType: RateType.FIXED,
      paymentFrequency: 52,
      term: 5,
    };
    expect(mortgageDetails).toBeDefined();
    expect(mortgageDetails.interestRate).toBe(2.00);
  });
});
