import { PaymentFrequency } from './payment-frequency';

describe('PaymentFrequency', () => {
  it('should validate interface PaymentFrequency', () => {
    const paymentFrequency: PaymentFrequency = {
      label: 'Monthly',
      weeks: 12,
    };
    expect(paymentFrequency).toBeDefined();
    expect(paymentFrequency.label).toBe('Monthly');
    expect(paymentFrequency.weeks).toBe(12);
  });
});
