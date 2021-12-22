import { PaymentFrequency } from './payment-frequency';

describe('PaymentFrequency', () => {
  it('should validate interface PaymentFrequency', () => {
    const paymentFrequency: PaymentFrequency = {
      label: 'Monthly',
      value: 12,
    };
    expect(paymentFrequency).toBeDefined();
    expect(paymentFrequency.label).toBe('Monthly');
    expect(paymentFrequency.value).toBe(12);
  });
});
