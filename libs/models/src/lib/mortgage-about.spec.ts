import { MortgageAbout } from './mortgage-about';

describe('MortgageAbout', () => {
  it('should validate interface MortgageAbout', () => {
    const mortgageAbout: MortgageAbout = {
      version: '1.0'
    };
    expect(mortgageAbout).toBeDefined();
    expect(mortgageAbout.version).toBe('1.0');
  });
});
