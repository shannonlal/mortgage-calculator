import './shared-ui-react.module.scss';
import { Selectable } from '@mortgage-calculator/models';
import React from 'react';
import {
    FormControl,
    Select
  } from "@material-ui/core";

/* eslint-disable-next-line */
interface CalculatorSelectProps<T extends Selectable> {
    id: string;
    initialValue:string;
    handleChange: (eventName: string, value :string) => void;
    eventName: string;
    optionsList: T[];
};


/**
 * The following will build a selection list that accepts a selectable list and will display it
 * @param props: CalculatorSelectProps
 * @returns 
 */
const CalculatorSelect = <T extends Selectable>(props: CalculatorSelectProps<T>) =>{
    const change = ( e: React.ChangeEvent<any> ) => {
        props.handleChange( props.eventName, e.target.value);
    }

    const generateOptionsList = ()=>{
        if( props.optionsList ){
            return props.optionsList.map((item: Selectable) => {
                return <option value={item.value}>{item.label} Years</option>;
            });
        }
        return;
    };

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
            {generateOptionsList()}
            </Select>
        </FormControl>
    )
}

export {
    CalculatorSelectProps,
    CalculatorSelect
};
