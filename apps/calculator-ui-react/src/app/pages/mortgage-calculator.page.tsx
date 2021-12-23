import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {CalculatorInputForm, CalculatorInputFormProps } from '../components/calculator-input-form/calculator-input-form'
import { RateType } from "@mortgage-calculator/models";

const useStyles = makeStyles({
  fieldBottom: {
    marginBottom: 10
  }
});

const MortgageCalculator = () => {
  const classes = useStyles();

  // update initial mortgageDetails state on user entry
  const handleChange = (eventName: string, eventValue :number|string) => {

    console.log(`Event name ${eventName} Value ${eventValue}`);
    /*setMortgageDetails({
      ...mortgageDetails,
      [eventName]: event.target.value
    });*/
  };

  const [mortgageDetails, setMortgageDetails] = useState<CalculatorInputFormProps>({
      mortgageAmount: 100000,
      prepaymentAmount: 10000,
      interestRate: 2.00,
      amortizationYear: 5,
      amortizationMonth: 2,
      interestRateType: RateType.FIXED,
      paymentFrequency: 52,
      term: 5,
      handleChange,
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




  return (
    <CalculatorInputForm {...mortgageDetails}/>
  );
};

export default MortgageCalculator;