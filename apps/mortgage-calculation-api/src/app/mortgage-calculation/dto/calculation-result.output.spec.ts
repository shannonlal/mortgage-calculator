import { CalculationResult } from './calculation-result.output';

describe('MortgageDetails', () => {
  it('should validate interface MortgageDetails', () => {
    const mortgageDetails: CalculationResult = {
      id: `1231233213`,
      monthlyPayment: 1212.31,
      creationDate: new Date().toISOString(),
      mortgageAmountPerMonth: 1212.31,
      termPrincipleAmount: 10000,
      termInterestAmount: 3000,
      totalInterestInPeriod: 400,
      totalAmountInPeriod: 3000
    };
    expect(mortgageDetails).toBeDefined();
    expect(mortgageDetails.termPrincipleAmount).toBe( 10000 );
  });
});
