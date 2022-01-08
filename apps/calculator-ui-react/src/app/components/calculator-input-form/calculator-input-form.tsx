import './calculator-input-form.module.scss';
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
import { IMortgageInitialParameters, loadMortgageInitialParameters } from './calculator-input-form.delegate';

const useStyles = makeStyles({
  fieldBottom: {
    marginBottom: 10
  }
});

/* eslint-disable-next-line */
export interface CalculatorInputFormProps {
  mortgageAmount: number;
  prepaymentAmount: number;
  interestRate: number;
  amortizationYear: number;
  amortizationMonth: number;
  interestRateType: RateType;
  paymentFrequency: number;
  term: number;
  handleChange: ( eventName: string, value:number|string ) =>void;
  initialMortgageDetails:IMortgageInitialParameters;
  submitCalculateMortgage: () => void;
}

export const CalculatorInputForm = (props: CalculatorInputFormProps) => {

  const classes = useStyles();
  return (
    <div data-testid="calculator-input-form-id">
    <Box m={6} className="c-mortgage-calculator">
      <Typography variant="h4" paragraph>
        Mortgage Calculator
      </Typography>
      <Grid item xs={6} container alignItems="center">
        <Grid item xs={5}>
          <Typography variant="body1">Mortgage Amount:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <NumericCalculatorInput {...getMortgageAmountProps(props.mortgageAmount, props.handleChange)}/>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Down Payment Amount:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <NumericCalculatorInput {...getDownPaymentAmountProps( props.prepaymentAmount, props.handleChange)}/>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Interest Rate:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <NumericCalculatorInput { ...getInterestRateProps( props.interestRate, props.handleChange)}
            />
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Amortization Period:</Typography>
        </Grid>
        <Grid item container xs={7} className={classes.fieldBottom}>
          <Grid item xs={6}>
            <CalculatorSelect { ...getAmortizationYearsProps( props.handleChange, props.initialMortgageDetails?.amortizationPeriod?.years ) }/>
          </Grid>
          <Grid item xs={6}>
          <CalculatorSelect { ...getAmortizationMonthsProps( props.handleChange, props.initialMortgageDetails?.amortizationPeriod?.months) }/>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Payment Frequency:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <CalculatorSelect { ...getPaymentFrequencyProps( props.handleChange, props.initialMortgageDetails?.paymentFrequencies ) }/>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Term:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <CalculatorSelect { ...getTermProps( props.handleChange, props.initialMortgageDetails?.terms ) }/>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="default"
        id="calculateMortgage"
        onClick={props.submitCalculateMortgage}
      >
        Calculate
      </Button>
    </Box>
    </div>
  );
}

export default CalculatorInputForm;
