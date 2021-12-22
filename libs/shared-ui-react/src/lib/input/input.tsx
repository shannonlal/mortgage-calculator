import './shared-ui-react.module.scss';
import React from 'react';
import {
    OutlinedInput,
    InputAdornment
  } from "@material-ui/core";

/* eslint-disable-next-line */
interface BaseCalculatorInputProps<T> {
    id: string;
    value:T;
    handleChange: (eventName: string, value :T) => void;
    eventName: string;
    adornmentValue?: string;
    adornmentPosition?: string;

};

type NumericCalculatorInputProps = BaseCalculatorInputProps<number>;

type StringCalculatorInputProps = BaseCalculatorInputProps<string>;

const NumericCalculatorInput = ( props: NumericCalculatorInputProps ) =>{

    const change = ( e: React.ChangeEvent<any> ) => {
        props.handleChange( props.eventName, e.target.value);
    }
    return (
        <OutlinedInput
                id={props.id}
                data-testid={props.id}
                value={props.value}
                fullWidth
                onChange={(e) => change(e,)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
      );
};



export {
    NumericCalculatorInput,
    NumericCalculatorInputProps
};
