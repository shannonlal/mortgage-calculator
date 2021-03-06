import { Selectable } from '@mortgage-calculator/models';
import React, {useState} from 'react';
import {
    FormControl,
    Select
  } from "@material-ui/core";

/* eslint-disable-next-line */
interface CalculatorSelectProps<T extends Selectable> {
    id: string;
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
    
    const [selected, setSelected] = useState("");
    
    const change = ( e: React.ChangeEvent<any> ) => {
        props.handleChange( props.eventName, e.target.value);
        setSelected( e.target.value );
    }

    const generateOptionsList = ()=>{
        if( props.optionsList ){
            return props.optionsList.map((item: Selectable, index) => {
                return <option key={`${props.eventName}-${index}`} value={item.value} data-testid={`calculator-option-${item.value}`}>{item.label}</option>;
            });
        }
        return;
    };

    return (
        <FormControl variant="outlined" data-testid={`form-select-${props.id}`} fullWidth>
            <Select
                native
                id={props.id}
                value={selected}
                onChange={change}
                inputProps={{
                    name: props.id
                }}
                data-testid={`select-${props.id}`}
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
