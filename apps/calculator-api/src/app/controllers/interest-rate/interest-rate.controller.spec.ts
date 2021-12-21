import { Test, TestingModule } from '@nestjs/testing';
import { InterestRateController } from './interest-rate.controller';
import { InterestRateService } from '@mortgage-calculator/calculator-service';

describe('InterestRateController', () => {
  let controller: InterestRateController;
  const mockRateTypes: Array<any> = [
      "FIXED",
      "VARIABLE"
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterestRateController],
      providers: [
        {
          provide: InterestRateService,
          useValue: {
            getRateTypes: jest.fn(() => {
              return Promise.resolve(mockRateTypes);
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<InterestRateController>(InterestRateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get rate types', async () => {
    try{
      const rateTypes = await controller.getRateTypes();
      expect( rateTypes ).toBeDefined();
      expect( rateTypes.length ).toBe( 2 );
    } catch (err){
      expect( err ).toBeUndefined();
    }
    expect(controller).toBeDefined();
  });
});
