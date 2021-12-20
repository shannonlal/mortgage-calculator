import { Test, TestingModule } from '@nestjs/testing';
import { InterestRateService } from './interest-rate.service';

describe('InterestRateService', () => {
  let service: InterestRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterestRateService],
    }).compile();

    service = module.get<InterestRateService>(InterestRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get rate types', async () => {
    try{
      const rateTypes = await service.getRateTypes();

      expect( rateTypes).toBeDefined();
      expect( rateTypes.length ).toBe(2);
    } catch (err) {
      expect( err ).toBeUndefined();
    }
  });
});
