
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
  interestRate: {
    rate:2.00,
    type: RateType.FIXED
  },
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
);

const inputFormFullProps: CalculatorInputFormProps = {
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
  amortizationPeriod: {
      "months": [
          {
              "label": "1 Month",
              "value": 1
          },
          {
              "label": "2 Months",
              "value": 2
          }
      ],
      "years": [
          {
              "label": "1 Year",
              "value": 1
          },
          {
              "label": "2 Years",
              "value": 2
          }
      ]
  },
  paymentFrequencies:   [
    {
        "label": "Weekly",
        "value": 52
    },
    {
        "label": "Accelerated Bi-Weekly",
        "value": 26
    }
  ],
  terms: [
      {
          "label": "1 Year",
          "value": 1
      },
      {
          "label": "2 Years",
          "value": 2
      }
  ],
  handleChange: ( eventName: string, value:number|string ) =>{
    action('Handle Change fired');
  }
};

export const FullCalculatorInputForm = () => (
  <CalculatorInputForm {...inputFormFullProps} />
);