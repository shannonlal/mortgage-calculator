import { Test, TestingModule } from '@nestjs/testing';
import { MortgageAboutService } from './mortgage-about.service';
import { MortgageAboutDto } from '../dto/mortgage.about.dto';
import { MortgageAbout } from '@mortgage-calculator/models';


describe('MortgageAboutService', () => {
  let service: MortgageAboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MortgageAboutService],
    }).compile();

    service = module.get<MortgageAboutService>(MortgageAboutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get about mortgage', async () => {
    try {

      const result: MortgageAboutDto = await service.getVersion();

      expect(result).toBeDefined();
      expect(result.about).toBeDefined();
      expect( result.about.version ).toBe( '1.0');

    } catch (err) {
      expect(err).toBeUndefined();
    }
  });


});
