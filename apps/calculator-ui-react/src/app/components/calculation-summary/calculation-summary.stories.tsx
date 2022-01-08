
import { RateType } from '@mortgage-calculator/models';
import { action } from '@storybook/addon-actions'
import { CalculationSummary, CalculationSummaryProps } from './calculation-summary';
export default {
  title: 'Calculator Summary ',
  component: CalculationSummary,
  argTypes: {}
};

const inputFormProps: CalculationSummaryProps = {
    term: 0,
    amortizationPeriodYear: 0,
    mortgageAmountPerMonth: 0,
    prepaymentAmount: 0,
    termPrincipleAmount: 0,
    mortgageAmount: 0,
    termInterestAmount: 0,
    totalInterestInPeriod: 0,
    totalAmountInPeriod: 0
};

export const BasicCalculatorSummaryTable = () => (
   <CalculationSummary {...inputFormProps} />
)