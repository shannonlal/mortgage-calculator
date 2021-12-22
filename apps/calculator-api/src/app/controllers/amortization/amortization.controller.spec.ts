import { AmortizationService } from '@mortgage-calculator/calculator-service';
import { AmortizationMonth, AmortizationPeriod, AmortizationYear } from '@mortgage-calculator/models';
import { Test, TestingModule } from '@nestjs/testing';
import { AmortizationController } from './amortization.controller';

describe('AmortizationController', () => {
  let controller: AmortizationController;

  const mockAmoriztionMonth: Array<AmortizationMonth> = [
    {
        "label": "1 Month",
        "value": 1
    },
    {
        "label": "2 Months",
        "value": 2
    }
  ];

  const mockAmoriztionYears: Array<AmortizationYear> = [
    {
      "label": "1 Year",
      "value": 1
    },
    {
        "label": "2 Years",
        "value": 2
    }
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmortizationController],
      providers: [
        {
          provide: AmortizationService,
          useValue: {
            getAmortizationYears: jest.fn(() => {
              return Promise.resolve(mockAmoriztionYears);
            }),
            getAmortizationMonths: jest.fn(() => {
              return Promise.resolve(mockAmoriztionMonth);
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<AmortizationController>(AmortizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get amortization period', async () => {
    try{
      const amorizationPeriod: AmortizationPeriod = await controller.getAmorizationPeriod();
      expect( amorizationPeriod ).toBeDefined();
      expect( amorizationPeriod.months ).toBeDefined();
      expect( amorizationPeriod.months.length ).toBe( 2 );
      expect( amorizationPeriod.years ).toBeDefined();
      expect( amorizationPeriod.years.length ).toBe( 2 );
    } catch (err){
      expect( err ).toBeUndefined();
    }
  });
});
