import { AmortizationYear, AmortizationMonth } from './amortization';

describe('AmortizationYear', () => {
  it('should validate interface AmortizationYear', () => {
    const amortizationYear: AmortizationYear = {
      label: `2 Years`,
      year: 2,
    };
    expect(amortizationYear).toBeDefined();
    expect(amortizationYear.label).toBe('2 Years');
    expect(amortizationYear.year).toBe(2);
  });
});

describe('AmortizationMonth', () => {
  it('should validate interface AmortizationMonth', () => {
    const amortizationMonth: AmortizationMonth = {
      label: `2 Month`,
      month: 2,
    };
    expect(amortizationMonth).toBeDefined();
    expect(amortizationMonth.label).toBe('2 Month');
    expect(amortizationMonth.month).toBe(2);
  });
});
