import { RateType, InterestRate } from './interest-rate';

describe('RateType', () => {
  it('should validate enum RateType', () => {
    expect(RateType).toBeDefined();
    expect(RateType.FIXED).toBe(1);
    expect(RateType.VARIABLE).toBe(2);
  });
});

describe('InterestRate', () => {
  it('should validate interface InterestRate', () => {
    const interestRate: InterestRate = {
      type: RateType.FIXED,
      rate: 2.1,
    };
    expect(interestRate).toBeDefined();
    expect(interestRate.type).toBe(1);
    expect(interestRate.rate).toBe(2.1);
  });
});
