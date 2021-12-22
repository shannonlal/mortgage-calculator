import { AmortizationMonth, AmortizationYear, Term } from '@mortgage-calculator/models';
import { CalculatorSelectProps, NumericCalculatorInputProps } from '@mortgage-calculator/shared-ui-react';
import {getMortgageAmountProps, getDownPaymentAmountProps, getInterestRateProps, getAmortizationYearsProps, getAmortizationMonthsProps, getPaymentFrequencyProps, getTermProps} from './calculator-input-props.builder';

const handleChange =  ( eventName: string, value:number|string ) =>{
    return;
}

describe( 'Calculator Input Props Builder ', () =>{

    it('Should test getMortgageAmountProps', ()=>{
        expect( getMortgageAmountProps).toBeDefined();

        const mortgageAmountProps: NumericCalculatorInputProps = getMortgageAmountProps( 100, handleChange );
        expect( mortgageAmountProps ).toBeDefined();
        expect( mortgageAmountProps.value ).toBe( 100 );
    });

    it('Should test getDownPaymentAmountProps', ()=>{
        expect( getDownPaymentAmountProps).toBeDefined();
        const downPaymentProps: NumericCalculatorInputProps = getDownPaymentAmountProps( 10001, handleChange );
        expect( downPaymentProps ).toBeDefined();
        expect( downPaymentProps.value ).toBe( 10001 );
    });

    it('Should test getInterestRateProps', ()=>{
        expect( getInterestRateProps).toBeDefined();
        const interestRateProps: NumericCalculatorInputProps = getInterestRateProps( 1.01, handleChange );
        expect( interestRateProps ).toBeDefined();
        expect( interestRateProps.value ).toBe( 1.01 );
    });

    it('Should test getAmortizationYearsProps', ()=>{
        expect( getAmortizationYearsProps).toBeDefined();
        const amortizationYearProps: CalculatorSelectProps<AmortizationYear>  = getAmortizationYearsProps( handleChange );
        expect( amortizationYearProps ).toBeDefined();
        expect( amortizationYearProps.optionsList.length).toBe( 0 );
    });

    it('Should test getAmortizationMonthsProps', ()=>{
        expect( getAmortizationMonthsProps).toBeDefined();
        const amortizationMonthProps: CalculatorSelectProps<AmortizationMonth>  = getAmortizationMonthsProps( handleChange );
        expect( amortizationMonthProps ).toBeDefined();
        expect( amortizationMonthProps.optionsList.length).toBe( 0 );
    });

    it('Should test getPaymentFrequencyProps', ()=>{
        expect( getPaymentFrequencyProps).toBeDefined();
        const paymentFrequencyProps: CalculatorSelectProps<AmortizationMonth>  = getPaymentFrequencyProps( handleChange );
        expect( paymentFrequencyProps ).toBeDefined();
        expect( paymentFrequencyProps.optionsList.length).toBe( 0 );
    });

    it('Should test getTermProps', ()=>{
        expect( getTermProps).toBeDefined();
        const termsProps: CalculatorSelectProps<Term>  = getTermProps( handleChange );
        expect( termsProps ).toBeDefined();
        expect( termsProps.optionsList.length).toBe( 0 );
    });
    
    
    

});