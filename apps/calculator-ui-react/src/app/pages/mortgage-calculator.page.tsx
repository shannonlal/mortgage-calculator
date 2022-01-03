import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {CalculatorInputForm, CalculatorInputFormProps } from '../components/calculator-input-form/calculator-input-form'
import { AmortizationPeriod, InterestRate, MortgageDetails, PaymentFrequency, RateType, Term } from "@mortgage-calculator/models";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { calculateMortgage } from  '../store/mortgage-calculation/mortgageSlice';
// import { fetchAmoritizationPeriod, fetchInterestRate, fetchPaymentFrequency, fetchRateTypes, fetchTerms } from "../store/fixeddata/fixedData.effect";
import { loadMortgageInitialParameters, IMortgageInitialParameters } from '../components/calculator-input-form/calculator-input-form.delegate';

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
  //const terms: Array<Term> = useAppSelector( state => state.terms.data );
  const termsError: string = useAppSelector ( state => state.terms.errorMessage );
  const rateTypes: Array<string> = useAppSelector( state => state.rateType.data);
  const rateTypesError: string = useAppSelector( state => state.rateType.errorMessage);
  //const amortizationPeriod: AmortizationPeriod = useAppSelector( state => state.amortization.data);
  const amortizationError: string  = useAppSelector( state => state.amortization.errorMessage );
  //const paymentFrequency: Array<PaymentFrequency> = useAppSelector( state => state.paymentFrequency.data );
  const paymentFrequencyError: string = useAppSelector( state => state.paymentFrequency.errorMessage );
  //const interestRate: InterestRate = useAppSelector( state => state.interestRate.data );
  const interestRateError: string = useAppSelector( state => state.interestRate.errorMessage );

  /*const loadInitialData = async () => {
    await fetchTerms();
    await fetchRateTypes();
    await fetchAmoritizationPeriod();
    await fetchPaymentFrequency();
    await fetchInterestRate( 'FIXED' );
  }*/

  const initialMortgageDetails: IMortgageInitialParameters = {
    terms: useAppSelector( state => state.terms.data ),
    interestRate: useAppSelector( state => state.interestRate.data ),
    amortizationPeriod: useAppSelector( state => state.amortization.data),
    paymentFrequencies: useAppSelector( state => state.paymentFrequency.data )
  }

  const [mortgageDetails, setMortgageDetails] = useState<MortgageDetails>({
      mortgageAmount: 100000,
      prepaymentAmount: 10000,
      interestRate: 2.00,
      amortizationYear: 5,
      amortizationMonth: 2,
      interestRateType: RateType.FIXED,
      paymentFrequency: 52,
      term: 5,
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
    // loadInitialData();
    loadMortgageInitialParameters();
  }, []);

  const inputPropoForm: CalculatorInputFormProps = {
    ...mortgageDetails,
    handleChange,
    initialMortgageDetails

  }

  return (
    <CalculatorInputForm {...inputPropoForm}/>
  );
};

export default MortgageCalculator;