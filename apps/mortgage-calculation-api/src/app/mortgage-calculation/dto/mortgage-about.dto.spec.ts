import { MortgageAboutDto } from './mortgage.about.dto';

describe('MortgageAboutDto', () => {
  it('should validate interface MortgageAboutDto', () => {
    const mortgageAboutDto: MortgageAboutDto = {
        about : {
          version: '1.0'
        }
    };
    expect(mortgageAboutDto).toBeDefined();
    expect(mortgageAboutDto.about).toBeDefined();
    expect(mortgageAboutDto.about.version).toBe('1.0');

  });
});
