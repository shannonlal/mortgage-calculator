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
        interestRate: 2.00,
        amortizationYear: 5,
        amortizationMonth: 2,
        interestRateType: RateType.FIXED,
        paymentFrequency: 52,
        term: 5,
        handleChange: jest.fn(),
        initialMortgageDetails: {
          interestRate: {
            type: RateType.FIXED,
            rate: 1.02
          },
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
          paymentFrequencies: [
            {
              "label": "Weekly",
              "value": 52
            },
            {
              "label": "Accelerated Bi-Weekly",
              "value": 26
            },
            {
              "label": "Semi-Monthly",
              "value": 24
            },
            {
              "label": "Monthly",
              "value": 12
            }
          ],
          amortizationPeriod: {
            months: [
              {
                "label": "1 Month",
                "value": 1
              },
              {
                "label": "2 Months",
                "value": 2
              }
            ],
            years: [
              {
                "label": "1 Year",
                "value": 1
              },
              {
                "label": "2 Years",
                "value": 2
              }
            ]
          }
        },
        submitCalculateMortgage: function (): void {
          throw new Error('Function not implemented.');
        }
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
