import { render } from '@testing-library/react';

import {CalculationSummary, CalculationSummaryProps } from './calculation-summary';

describe('CalculationSummary', () => {
  it('should render successfully', () => {

    const props: CalculationSummaryProps = {
      term: 0,
      amortizationPeriodYear: 0,
      mortgageAmountPerMonth: 0,
      prepaymentAmount: 0,
      termPrincipleAmount: 0,
      mortgageAmount: 0,
      termInterestAmount: 0,
      totalInterestInPeriod: 0,
      totalAmountInPeriod: 0
    }

    const { baseElement } = render(<CalculationSummary {...props}/>);
    expect(baseElement).toBeTruthy();
  });
});
