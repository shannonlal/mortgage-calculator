import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  OutlinedInput,
  InputAdornment,
  Typography,
  Button,
  FormControl,
  Select,
  Box
} from "@material-ui/core";
// import MortgageCalculationSummary from "./mortgage-calculation-summary.component";
import { generateOptionsHelpers } from "./mortgage-calculator.helpers";

const useStyles = makeStyles({
  fieldBottom: {
    marginBottom: 10
  }
});

const MortgageCalculator = () => {
  const classes = useStyles();

  const [mortgageDetails, setMortgageDetails] = useState({
    mortgageAmount: 100000.0,
    interestRate: 5.0,
    amortizationPeriodYear: 25,
    amortizationPeriodMonth: 0,
    paymentFrequency: "M",
    term: 5,
    prepaymentAmount: 0.0
  });

  const [interestDetails, setInterestDetails] = useState({
    totalAmountInPeriod: 0,
    totalInterestInPeriod: 0,
    mortgageAmountPerMonth: 0,
    termInterestAmount: 0,
    termPrincipleAmount: 0
  });

  // calculate mortgage on initial render
  useEffect(() => {
    console.log('Hello Data');
  }, []);

  // update initial mortgageDetails state on user entry
  const handleChange = (event: React.ChangeEvent<any>, eventName :string) => {
    /*setMortgageDetails({
      ...mortgageDetails,
      [eventName]: event.target.value
    });*/
  };


  return (
    <Box m={6} className="c-mortgage-calculator">
      <Typography variant="h4" paragraph>
        Mortgage Calculator
      </Typography>
      <Grid item xs={6} container alignItems="center">
        <Grid item xs={5}>
          <Typography variant="body1">Mortgage Amount:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <OutlinedInput
            id="mortgageamount"
            value={mortgageDetails.mortgageAmount}
            fullWidth
            onChange={(e) => handleChange(e, "mortgageAmount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Down Payment Amount:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <OutlinedInput
            id="prepaymentAmount"
            value={mortgageDetails.prepaymentAmount}
            fullWidth
            onChange={(e) => handleChange(e, "prepaymentAmount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Interest Rate:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <OutlinedInput
            id="interestRate"
            value={mortgageDetails.interestRate}
            fullWidth
            onChange={(e) => handleChange(e, "interestRate")}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
          />
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Amortization Period:</Typography>
        </Grid>
        <Grid item container xs={7} className={classes.fieldBottom}>
          <Grid item xs={6}>
            <FormControl variant="outlined" fullWidth>
              <Select
                native
                id={"amortizationPeriodYear"}
                value={mortgageDetails.amortizationPeriodYear}
                onChange={(e) => handleChange(e, "amortizationPeriodYear")}
                inputProps={{
                  name: "amortizationPeriodYear"
                }}
              >
                <option aria-label="None" value="" />
                {/**generateOptionsHelpers.generatePeriodYearsOptions()**/}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" fullWidth>
              <Select
                native
                id="amortizationPeriodMonth"
                value={mortgageDetails.amortizationPeriodMonth}
                onChange={(e) => handleChange(e, "amortizationPeriodMonth")}
                inputProps={{
                  name: "amortizationPeriodMonth"
                }}
              >
                <option aria-label="None" value="" />
                {/**generateOptionsHelpers.generatePeriodMonthsOption()**/}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Payment Frequency:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <FormControl variant="outlined" fullWidth>
            <Select
              native
              id={"paymentFrequency"}
              value={mortgageDetails.paymentFrequency}
              onChange={(e) => handleChange(e, "paymentFrequency")}
              inputProps={{
                name: "paymentFrequency"
              }}
            >
              {/**generateOptionsHelpers.generatePaymentFrequencyOptions()**/}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="body1">Term:</Typography>
        </Grid>
        <Grid item xs={7} className={classes.fieldBottom}>
          <FormControl variant="outlined" fullWidth>
            <Select
              native
              id="term"
              value={mortgageDetails.term}
              onChange={(e) => handleChange(e, "term")}
              inputProps={{
                name: "term"
              }}
            >
              {/**generateOptionsHelpers.generateTermsOptions()**/}
            </Select>
          </FormControl>
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
  );
};

export default MortgageCalculator;