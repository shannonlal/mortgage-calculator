import { render } from '@testing-library/react';

import CalculatorInputForm from './calculator-input-form';

describe('CalculatorInputForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalculatorInputForm />);
    expect(baseElement).toBeTruthy();
  });
});
