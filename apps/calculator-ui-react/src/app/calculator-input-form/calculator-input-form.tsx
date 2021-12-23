import './calculator-input-form.module.scss';
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Button
} from "@material-ui/core";

import { CalculatorSelect, NumericCalculatorInput} from '@mortgage-calculator/shared-ui-react';
import { 
  getAmortizationMonthsProps, 
  getAmortizationYearsProps, 
  getDownPaymentAmountProps, 
  getInterestRateProps, 
  getMortgageAmountProps, 
  getPaymentFrequencyProps, 
  getTermProps } from './calculator-input-props.builder';
import { RateType } from '@mortgage-calculator/models';

const useStyles = makeStyles({
  fieldBottom: {
    marginBottom: 10
  }
});

interface IMortgageDetails {
  mortgageAmount: number;
  prepaymentAmount: number;
  interestRate: number;
  amortizationYear: number;
  amortizationMonth: number;
  interestRateType: RateType;
  paymentFrequency: number;
  term: number;
};

/* eslint-disable-next-line */
export interface CalculatorInputFormProps {}

export const CalculatorInputForm = (props: CalculatorInputFormProps) => {

  const handleChange = ( eventName: string, value:number|string ) => {
    return;
  };

  const [mortgageDetails, setMortgageDetails] = useState<IMortgageDetails>({
    mortgageAmount: 100000,
    prepaymentAmount: 10000,
    interestRate: 2.00,
    amortizationYear: 5,
    amortizationMonth: 2,
    interestRateType: RateType.FIXED,
    paymentFrequency: 52,
    term: 5
  });

  const classes = useStyles();
  return (
    <div>
    <Box m={6} className="c-mortgage-calculator">
      <Typography variant="h4" paragraph>
        Mortgage Calculator
      </Typography>
      <Grid item xs={6} container alignItems="center">
        <Grid item xs={5}>
          <Typography variant="body1">Mortgage Amount:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <NumericCalculatorInput {...getMortgageAmountProps(mortgageDetails.mortgageAmount, handleChange)}/>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Down Payment Amount:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <NumericCalculatorInput {...getDownPaymentAmountProps( mortgageDetails.prepaymentAmount, handleChange)}/>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Interest Rate:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <NumericCalculatorInput { ...getInterestRateProps( mortgageDetails.interestRate, handleChange)}
            />
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Amortization Period:</Typography>
        </Grid>
        <Grid item container xs={7} className={classes.fieldBottom}>
          <Grid item xs={6}>
            <CalculatorSelect { ...getAmortizationYearsProps( handleChange ) }/>
          </Grid>
          <Grid item xs={6}>
          <CalculatorSelect { ...getAmortizationMonthsProps( handleChange) }/>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Payment Frequency:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <CalculatorSelect { ...getPaymentFrequencyProps( handleChange ) }/>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Term:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <CalculatorSelect { ...getTermProps( handleChange ) }/>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="default"
        id="calculateMortgage"
        onClick={() => {console.log('Clicked Page');}}
      >
        Calculate
      </Button>
    </Box>
    </div>
  );
}

export default CalculatorInputForm;
