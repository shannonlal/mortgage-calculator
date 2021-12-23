import { RateType } from '@mortgage-calculator/models';
import { act, render, waitFor } from '@testing-library/react';
import CalculatorInputForm, { CalculatorInputFormProps } from './calculator-input-form';

jest.mock('@mortgage-calculator/shared-ui-react', () => ({ CalculatorSelect: () => 'mocked calculator select', NumericCalculatorInput: () => 'mocked numeric calculator input' }));



describe('CalculatorInputForm', () => {
  it('should render successfully', async () => {
    try{
      const inputFormProps: CalculatorInputFormProps = {
        mortgageAmount: 100000,
        prepaymentAmount: 10000,
        interestRate: {
          rate:2.00,
          type: RateType.FIXED
        },
        amortizationYear: 5,
        amortizationMonth: 2,
        interestRateType: RateType.FIXED,
        paymentFrequency: 52,
        term: 5,
        handleChange: jest.fn()
      };

      await act( async ()=> {
        const { getByTestId } = render(<CalculatorInputForm {...inputFormProps}/>);
        const form = getByTestId( 'calculator-input-form-id' );
        expect(form).toBeDefined();
      })

    } catch(err){
      expect( err ).toBeUndefined();
    }
  });
});
