import { action } from '@storybook/addon-actions';
import { PaymentFrequency } from '@mortgage-calculator/models';
import {
    CalculatorSelect,
    CalculatorSelectProps } from './select';
export default {
    title: 'Calculator Select',
    component: CalculatorSelect,
    argTypes: {}
};

const handleChange = (name: string, value: string) =>{action(`Name: ${name}, Value: ${value}`)}

const paymentFreqency: PaymentFrequency[] = [
    {
        "label": "Weekly",
        "value": 52
    },
    {
        "label": "Accelerated Bi-Weekly",
        "value": 26
    }
];
const basicPaymentFrequencyProps: CalculatorSelectProps<PaymentFrequency> = {
    id: 'select-id',
    handleChange,
    eventName: 'component-event',
    optionsList:paymentFreqency,
};


export const BasicSelectCalculators = () => (
     <CalculatorSelect {...basicPaymentFrequencyProps} />
)

const emptyPaymentFrequencyProps: CalculatorSelectProps<PaymentFrequency> = {
    id: 'select-id',
    handleChange,
    eventName: 'component-event',
    optionsList:[],
};


export const EmptySelectCalculators = () => (
     <CalculatorSelect {...emptyPaymentFrequencyProps} />
);

const singlePaymentFreqency: PaymentFrequency[] = [
    {
        "label": "Weekly",
        "value": 52
    }
];

const singlePaymentFrequencyProps: CalculatorSelectProps<PaymentFrequency> = {
    id: 'select-id',
    handleChange,
    eventName: 'component-event',
    optionsList:singlePaymentFreqency,
};


export const SingleSelectCalculators = () => (
     <CalculatorSelect {...singlePaymentFrequencyProps} />
)
