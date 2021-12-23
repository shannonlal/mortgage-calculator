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

export const getAmortizationYearsProps = ( handleChange: ( eventName: string, value:number|string ) => void, optionsList: AmortizationYear[]| undefined) : CalculatorSelectProps<AmortizationYear> => {
    if( optionsList === undefined ){
        return {
            id: 'amortization-year-select-id',
            handleChange,
            eventName: 'amortizationYear',
            optionsList:[]
          };
    } else {
        return {
            id: 'amortization-year-select-id',
            handleChange,
            eventName: 'amortizationYear',
            optionsList
          };
    }
;}

export const getAmortizationMonthsProps = (handleChange: ( eventName: string, value:number|string ) => void, optionsList: AmortizationMonth[] | undefined): CalculatorSelectProps<AmortizationMonth> => {
    if( optionsList === undefined ){
        return {
            id: 'amortization-month-select-id',
            handleChange,
            eventName: 'amortizationMonth',
            optionsList:[]
          };
    } else {
        return {
            id: 'amortization-month-select-id',
            handleChange,
            eventName: 'amortizationMonth',
            optionsList,
          };
    } 

};

export const getPaymentFrequencyProps = (handleChange: ( eventName: string, value:number|string ) => void, optionsList: PaymentFrequency[] | undefined): CalculatorSelectProps<PaymentFrequency> => {
    if( optionsList === undefined ){
        return {
            id: 'payment-frequency-select-id',
            handleChange,
            eventName: 'paymentFrequency',
            optionsList:[]
          };
    } else {
        return {
            id: 'payment-frequency-select-id',
            handleChange,
            eventName: 'paymentFrequency',
            optionsList
          };
    }
};
  
export const getTermProps = ( handleChange: ( eventName: string, value:number|string ) => void, optionsList: Term[] | undefined ): CalculatorSelectProps<Term> => {
    if( optionsList === undefined ){
        return {
            id: 'term-select-id',
            handleChange,
            eventName: 'term',
            optionsList: []
          };
    } else {
        return {
            id: 'term-select-id',
            handleChange,
            eventName: 'term',
            optionsList
        }
    }
    

};