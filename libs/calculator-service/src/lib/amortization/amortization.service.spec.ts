import { Test, TestingModule } from '@nestjs/testing';
import { AmortizationService } from './amortization.service';

describe('AmortizationService', () => {
  let service: AmortizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmortizationService],
    }).compile();

    service = module.get<AmortizationService>(AmortizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get Amortization Years', async () => {
    try{
      const amortizationYears = await service.getAmortizationYears();

      expect( amortizationYears ).toBeDefined();
      expect( amortizationYears.length ).toBe( 30 );
      expect( amortizationYears[0].label ).toBe( '1 Year');
      expect( amortizationYears[0].value).toBe( 1 );
      expect( amortizationYears[1].label ).toBe( '2 Years');
      expect( amortizationYears[1].value).toBe( 2 );
    }catch( err ){
      expect( err ).toBeUndefined();
    }
  });

  it('should get Amortization Months', async () => {
    try{
      const amortizationMonths = await service.getAmortizationMonths();

      expect( amortizationMonths ).toBeDefined();
      expect( amortizationMonths.length ).toBe( 12 );
      expect( amortizationMonths[0].label ).toBe( '1 Month');
      expect( amortizationMonths[0].value).toBe( 1 );
      expect( amortizationMonths[1].label ).toBe( '2 Months');
      expect( amortizationMonths[1].value).toBe( 2 );
    }catch( err ){
      expect( err ).toBeUndefined();
    }
  });
});
