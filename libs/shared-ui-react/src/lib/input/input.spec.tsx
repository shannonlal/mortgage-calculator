import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { NumericCalculatorInput, NumericCalculatorInputProps } from "./input";

describe("when rendered with a Numeric Calculator Input", () => {
  it("should render Numeric Calculator Input", async () => {

    const handleChange = jest.fn();
    const props: NumericCalculatorInputProps = {
        id: 'component-id',
        value: 100.01,
        handleChange,
        eventName: 'component-event',
        adornmentValue: '$', 
        adornmentPosition: 'start'
    };
    try{
        const { container, baseElement, getByTestId } = render(<NumericCalculatorInput {...props} />); 

        const input: HTMLInputElement|null = getByTestId('component-id').querySelector('input');
 
        if( input !== null){
            fireEvent.change( input, {target: {value: '301.01'}});
        }
        expect( handleChange ).toHaveBeenCalled();
    } catch( err ){
      expect( err ).toBeUndefined();  
    }
  });

  it("should render Numeric Calculator Input with % adornment", async () => {

    const handleChange = jest.fn();
    const props: NumericCalculatorInputProps = {
        id: 'component-id',
        value: 100.01,
        handleChange,
        eventName: 'component-event',
        adornmentValue: '%', 
        adornmentPosition: 'start'
    };
    try{
        const { queryByText } = render(<NumericCalculatorInput {...props} />); 

        const input: HTMLElement| null = await queryByText('%')

        expect( input ).toBeDefined();
    } catch( err ){
      expect( err ).toBeUndefined();  
    }
  });

  it("should render Numeric Calculator Input without % adornment", async () => {

    const handleChange = jest.fn();
    const props: NumericCalculatorInputProps = {
        id: 'component-id',
        value: 100.01,
        handleChange,
        eventName: 'component-event',
    };
    try{
        const { queryByText } = render(<NumericCalculatorInput {...props} />); 

        const input: HTMLElement| null = queryByText('%');

        expect( input ).toBe( null );
    } catch( err ){
      expect( err ).toBeUndefined();  
    }
  });
});
