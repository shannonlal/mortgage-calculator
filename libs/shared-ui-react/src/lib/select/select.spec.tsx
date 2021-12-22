import { render, fireEvent, screen } from "@testing-library/react";
import { PaymentFrequency } from "@mortgage-calculator/models";
import '@testing-library/jest-dom/extend-expect';
import { 
  CalculatorSelect, 
    CalculatorSelectProps } from "./select";

describe("Calculator Select", () => {
  it("should render Calculator Select", async () => {

    const handleChange = jest.fn();
    const optionsList: PaymentFrequency[] = [
        {
            "label": "Weekly",
            "value": 52
        },
        {
            "label": "Accelerated Bi-Weekly",
            "value": 26
        }
    ];
    const props: CalculatorSelectProps<PaymentFrequency> = {
        id: 'select-id',
        handleChange,
        eventName: 'component-event',
        optionsList
    };
    try{
        const { getByTestId } = render(<CalculatorSelect {...props} />); 

        const formSelect: HTMLElement = getByTestId('form-select-select-id');

        expect( formSelect ).toBeDefined();

        const select: HTMLSelectElement|null = getByTestId('form-select-select-id').querySelector('select');

        expect( select ).toBeDefined();
    } catch( err ){
      expect( err ).toBeUndefined();  
    }
  });

  it("should change option on Calculator Select", async () => {

    const handleChange = jest.fn();
    const optionsList: PaymentFrequency[] = [
        {
            "label": "Weekly",
            "value": 52
        },
        {
            "label": "Accelerated Bi-Weekly",
            "value": 26
        }
    ];
    const props: CalculatorSelectProps<PaymentFrequency> = {
        id: 'select-id',
        handleChange,
        eventName: 'component-event',
        optionsList
    };
    try{
        const { getByTestId } = render(<CalculatorSelect {...props} />); 

        const select: HTMLSelectElement|null = getByTestId('form-select-select-id').querySelector('select');

        if( select !== null){
            fireEvent.change( select, {target: {value: '26'}});
        }
        expect( handleChange ).toHaveBeenCalled();
    } catch( err ){
      expect( err ).toBeUndefined();  
    }
  });
});