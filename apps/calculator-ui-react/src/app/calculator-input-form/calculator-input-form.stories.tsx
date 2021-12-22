
import { CalculatorInputForm, CalculatorInputFormProps } from './calculator-input-form';
export default {
  title: 'Calculator Input Form',
  component: CalculatorInputForm,
  argTypes: {}
};

const inputFormProps: CalculatorInputFormProps = {

};

export const BasicCalculatorInputForm = () => (
   <CalculatorInputForm {...inputFormProps} />
)