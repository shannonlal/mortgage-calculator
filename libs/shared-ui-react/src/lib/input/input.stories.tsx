
import {
    NumericCalculatorInput, 
    NumericCalculatorInputProps,
    StringCalculatorInput,
    StringCalculatorInputProps } from './input';
export default {
    title: 'Calculator Input',
    component: NumericCalculatorInput,
    argTypes: {}
};

const numberInputProps: NumericCalculatorInputProps = {
    id: 'component-id',
    value: 100.01,
    handleChange: (name: string, value: number) => {
        console.log( `Name: ${name}, Value: ${value}`);
    },
    eventName: 'component-event',
    adornmentValue: '$', 
    adornmentPosition: 'start'
};

export const BasicInputCalculators = () => (
     <NumericCalculatorInput {...numberInputProps} />
)

const numberNoAdornmentInputProps: NumericCalculatorInputProps = {
    id: 'component-id',
    value: 100.01,
    handleChange: (name: string, value: number) => {
        console.log( `Name: ${name}, Value: ${value}`);
    },
    eventName: 'component-event',
};

export const NumberNoAdornmentInputCalculators = () => (
     <NumericCalculatorInput {...numberNoAdornmentInputProps} />
);

const stringInputProps: StringCalculatorInputProps = {
    id: 'component-id',
    value: 'Storybook',
    handleChange: (name: string, value: string) => {
        console.log( `Name: ${name}, Value: ${value}`);
    },
    eventName: 'component-event',
    adornmentValue: '$', 
    adornmentPosition: 'start'
};

export const BasicStringInputCalculators = () => (
     <StringCalculatorInput {...stringInputProps} />
);

const stringNoAdornmentInputProps: StringCalculatorInputProps = {
    id: 'component-id',
    value: 'Storybook',
    handleChange: (name: string, value: string) => {
        console.log( `Name: ${name}, Value: ${value}`);
    },
    eventName: 'component-event',
};

export const BasicStringNoAdornmentInputCalculators = () => (
     <StringCalculatorInput {...stringNoAdornmentInputProps} />
)