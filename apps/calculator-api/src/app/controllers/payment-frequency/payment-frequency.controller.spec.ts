import { PaymentFrequencyService } from '@mortgage-calculator/calculator-service';
import { PaymentFrequency } from '@mortgage-calculator/models';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentFrequencyController } from './payment-frequency.controller';

describe('PaymentFrequencyController', () => {
  let controller: PaymentFrequencyController;

  const mockPaymentFrequency: Array<PaymentFrequency> = [
    {
      "label": "Weekly",
      "value": 52
    },
    {
        "label": "Accelerated Bi-Weekly",
        "value": 26
    }
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentFrequencyController],
      providers: [
        {
          provide: PaymentFrequencyService,
          useValue: {
            getPaymentFrequency: jest.fn(() => {
              return Promise.resolve(mockPaymentFrequency);
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<PaymentFrequencyController>(PaymentFrequencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get payment frequency', async () => {
    try{
      const paymentFrequency:Array<PaymentFrequency> = await controller.getPaymentFrequency();
      expect( paymentFrequency ).toBeDefined();
      expect( paymentFrequency.length ).toBe( 2 );
      expect( paymentFrequency[0].label ).toBe( 'Weekly' );
      expect( paymentFrequency[0].value ).toBe( 52 );
    } catch (err){
      expect( err ).toBeUndefined();
    }
  });
});
