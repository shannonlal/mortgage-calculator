import { render } from '@testing-library/react';

import CalculationSummary from './calculation-summary';

describe('CalculationSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalculationSummary />);
    expect(baseElement).toBeTruthy();
  });
});
