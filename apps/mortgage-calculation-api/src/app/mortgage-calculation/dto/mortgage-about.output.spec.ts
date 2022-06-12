import { MortgageAboutResult } from './mortgage-about.output';

describe('MortgageAboutResult', () => {
  it('should validate interface MortgageAboutResult', () => {
    const mortgageAboutResult: MortgageAboutResult = {
      version: `1.0`,
    };
    expect(mortgageAboutResult).toBeDefined();
    expect(mortgageAboutResult.version).toBe( '1.0' );
  });
});
