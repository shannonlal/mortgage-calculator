
import { RateType } from '@mortgage-calculator/models';
import { action } from '@storybook/addon-actions'
import { CalculatorInputForm, CalculatorInputFormProps } from './calculator-input-form';
export default {
  title: 'Calculator Input Form',
  component: CalculatorInputForm,
  argTypes: {}
};

const inputFormProps: CalculatorInputFormProps = {
  mortgageAmount: 100000,
  prepaymentAmount: 10000,
  interestRate: 2.00,
  amortizationYear: 5,
  amortizationMonth: 2,
  interestRateType: RateType.FIXED,
  paymentFrequency: 52,
  term: 5,
  handleChange: ( eventName: string, value:number|string ) =>{
    action('Handle Change fired');
  }
};

export const BasicCalculatorInputForm = () => (
   <CalculatorInputForm {...inputFormProps} />
)