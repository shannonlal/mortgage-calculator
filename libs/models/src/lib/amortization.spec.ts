import { AmortizationYear, AmortizationMonth, AmortizationPeriod } from './amortization';

describe('AmortizationYear', () => {
  it('should validate interface AmortizationYear', () => {
    const amortizationYear: AmortizationYear = {
      label: `2 Years`,
      value: 2,
    };
    expect(amortizationYear).toBeDefined();
    expect(amortizationYear.label).toBe('2 Years');
    expect(amortizationYear.value).toBe(2);
  });
});

describe('AmortizationMonth', () => {
  it('should validate interface AmortizationMonth', () => {
    const amortizationMonth: AmortizationMonth = {
      label: `2 Month`,
      value: 2,
    };
    expect(amortizationMonth).toBeDefined();
    expect(amortizationMonth.label).toBe('2 Month');
    expect(amortizationMonth.value).toBe(2);
  });
});

describe('AmortizationPeriod', () => {
  it('should validate interface AmortizationPeriod', () => {
    const amortizationPeriod: AmortizationPeriod = {
      months: [
        {
          label: `1 Month`,
          value: 1,
        }
      ],
      years: [
        {
          label: `2 Years`,
          value: 2,
        }
      ]
    };
    expect(amortizationPeriod).toBeDefined();
    expect(amortizationPeriod.months).toBeDefined();
    expect(amortizationPeriod.years).toBeDefined();
  });
});
