import { PaymentFrequency } from '@mortgage-calculator/models';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentFrequencyService } from './payment-frequency.service';

describe('PaymentFrequencyService', () => {
  let service: PaymentFrequencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentFrequencyService],
    }).compile();

    service = module.get<PaymentFrequencyService>(PaymentFrequencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get payment frequency', async () => {
    try {
      const paymentFrequency: Array<PaymentFrequency> = await service.getPaymentFrequency();

      expect(paymentFrequency).toBeDefined();
      expect(paymentFrequency.length).toBe(4);
    } catch (err) {
      expect(err).toBeUndefined();
    }
  });
});
