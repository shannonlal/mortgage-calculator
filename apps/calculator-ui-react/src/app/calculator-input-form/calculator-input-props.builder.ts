import { AmortizationMonth, AmortizationYear, PaymentFrequency, Term } from "@mortgage-calculator/models";
import { CalculatorSelectProps, NumericCalculatorInputProps } from "@mortgage-calculator/shared-ui-react";

export const getMortgageAmountProps = (mortgageAmount: number, handleChange: ( eventName: string, value:number|string ) => void) : NumericCalculatorInputProps =>{
    return {
        id:'mortgageamount',
        handleChange,
        eventName:'mortgageamount',
        adornmentValue:'$', 
        adornmentPosition:'start',
        value: mortgageAmount
    };
}

export const getDownPaymentAmountProps = (downPayment: number, handleChange: ( eventName: string, value:number|string ) => void) : NumericCalculatorInputProps =>{
    return {
        id:'prepaymentAmount',
        handleChange,
        eventName:'prepaymentAmount',
        adornmentValue:'$', 
        adornmentPosition:'start',
        value: downPayment
    };
};

export const getInterestRateProps = (interestRate: number, handleChange: ( eventName: string, value:number|string ) => void) : NumericCalculatorInputProps =>{
    return {
        id:'interestRate',
        handleChange,
        eventName:'interestRate',
        adornmentValue:'%', 
        adornmentPosition:'start',
        value: interestRate
    };
};

export const getAmortizationYearsProps = ( handleChange: ( eventName: string, value:number|string ) => void) : CalculatorSelectProps<AmortizationYear> => {
    return {
      id: 'amortization-year-select-id',
      handleChange,
      eventName: 'amortizationYear',
      optionsList:[],
    };
;}

export const getAmortizationMonthsProps = (handleChange: ( eventName: string, value:number|string ) => void): CalculatorSelectProps<AmortizationMonth> => {
    return {
      id: 'amortization-month-select-id',
      handleChange,
      eventName: 'amortizationMonth',
      optionsList:[],
    };
};

export const getPaymentFrequencyProps = (handleChange: ( eventName: string, value:number|string ) => void): CalculatorSelectProps<PaymentFrequency> => {
    return {
      id: 'payment-frequency-select-id',
      handleChange,
      eventName: 'paymentFrequency',
      optionsList:[],
    };
};
  
export const getTermProps = ( handleChange: ( eventName: string, value:number|string ) => void ): CalculatorSelectProps<Term> => {
    return {
      id: 'term-select-id',
      handleChange,
      eventName: 'term',
      optionsList:[],
    };
};