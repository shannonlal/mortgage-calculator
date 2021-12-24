import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {CalculatorInputForm, CalculatorInputFormProps } from '../components/calculator-input-form/calculator-input-form'
import { MortgageDetails, RateType } from "@mortgage-calculator/models";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { calculateMortgage } from  '../store/mortgageSlice';

const useStyles = makeStyles({
  fieldBottom: {
    marginBottom: 10
  }
});

const MortgageCalculator = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const dispatchMortgageDetails = (eventName: string, eventValue :number|string, md: MortgageDetails) => {
    dispatch( calculateMortgage({...mortgageDetails,
      [eventName]: eventValue
     }) )
  }
  // update initial mortgageDetails state on user entry


  const [mortgageDetails, setMortgageDetails] = useState<MortgageDetails>({
      mortgageAmount: 100000,
      prepaymentAmount: 10000,
      interestRate: 2.00,
      amortizationYear: 5,
      amortizationMonth: 2,
      interestRateType: RateType.FIXED,
      paymentFrequency: 52,
      term: 5
    });

    const handleChange = (eventName: string, eventValue :number|string) => {

      console.log(`Event name ${eventName} Value ${eventValue}`);
     dispatchMortgageDetails( eventName, eventValue, mortgageDetails)
    };

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

  const inputPropoForm: CalculatorInputFormProps = {
    ...mortgageDetails, 
    handleChange
  }

  return (
    <CalculatorInputForm {...inputPropoForm}/>
  );
};

export default MortgageCalculator;