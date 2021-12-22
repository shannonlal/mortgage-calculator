import './shared-ui-react.module.scss';
import React from 'react';
import {
    FormControl,
    Select
  } from "@material-ui/core";

/* eslint-disable-next-line */
interface CalculatorSelectProps<T> {
    id: string;
    initialValue:string;
    handleChange: (eventName: string, value :string) => void;
    eventName: string;
    adornmentValue?: string;
    adornmentPosition? : 'end'|'start';
    optionsList: T[];
};


/*const CalculatorSelect = <T>( props: CalculatorSelectProps<T> ) =>{

    const change = ( e: React.ChangeEvent<any> ) => {
        props.handleChange( props.eventName, e.target.value);
    }

    return (
        <FormControl variant="outlined" fullWidth>
            <Select
                native
                id={props.id}
                value={props.initialValue}
                onChange={change}
                inputProps={{
                    name: props.id
                }}
            >
            <option aria-label="None" value="" />
            {generateOptionsHelpers.generatePeriodYearsOptions()}
            </Select>
        </FormControl>
    )
};*/



export {
    CalculatorSelectProps
};
