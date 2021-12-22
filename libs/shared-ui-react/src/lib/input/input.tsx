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
    adornmentPosition? : 'end'|'start';
};

type NumericCalculatorInputProps = BaseCalculatorInputProps<number>;

type StringCalculatorInputProps = BaseCalculatorInputProps<string>;

const NumericCalculatorInput = ( props: NumericCalculatorInputProps ) =>{

    const change = ( e: React.ChangeEvent<any> ) => {
        props.handleChange( props.eventName, e.target.value);
    }

    if( props.adornmentPosition && props.adornmentValue){
        return (
            <OutlinedInput
                    id={props.id}
                    data-testid={props.id}
                    value={props.value}
                    fullWidth
                    onChange={(e) => change(e,)}
                    startAdornment={<InputAdornment position={props.adornmentPosition}>{props!.adornmentValue}</InputAdornment>}
                />
          );
        } else {
            return (
                <OutlinedInput
                    id={props.id}
                    data-testid={props.id}
                    value={props.value}
                    fullWidth
                    onChange={(e) => change(e,)}
                />
            );
        }
};

const StringCalculatorInput = ( props: StringCalculatorInputProps ) =>{

    const change = ( e: React.ChangeEvent<any> ) => {
        props.handleChange( props.eventName, e.target.value);
    }

    if( props.adornmentPosition && props.adornmentValue){
        return (
            <OutlinedInput
                    id={props.id}
                    data-testid={props.id}
                    value={props.value}
                    fullWidth
                    onChange={(e) => change(e,)}
                    startAdornment={<InputAdornment position={props.adornmentPosition}>{props!.adornmentValue}</InputAdornment>}
                />
          );
        } else {
            return (
                <OutlinedInput
                    id={props.id}
                    data-testid={props.id}
                    value={props.value}
                    fullWidth
                    onChange={(e) => change(e,)}
                />
            );
        }
};

export {
    NumericCalculatorInput,
    NumericCalculatorInputProps,
    StringCalculatorInput,
    StringCalculatorInputProps
};
