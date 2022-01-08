import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CalculatorInputForm, CalculatorInputFormProps } from '../components/calculator-input-form/calculator-input-form';
import { CalculationSummary, CalculationSummaryProps } from '../components/calculation-summary/calculation-summary';
import { MortgageDetails, RateType } from "@mortgage-calculator/models";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchMortgageCalculation } from  '../store/mortgage-calculation/mortgage.effect';

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
    /*dispatch( calculateMortgage({...mortgageDetails,
      [eventName]: eventValue
     }) )*/
  }

  const termsError: string = useAppSelector ( state => state.terms.errorMessage );
  const rateTypes: Array<string> = useAppSelector( state => state.rateType.data);
  const rateTypesError: string = useAppSelector( state => state.rateType.errorMessage);
  const amortizationError: string  = useAppSelector( state => state.amortization.errorMessage );
  const paymentFrequencyError: string = useAppSelector( state => state.paymentFrequency.errorMessage );
  const interestRateError: string = useAppSelector( state => state.interestRate.errorMessage );

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

    const [displaySummaryTable, setDisplaySummaryTable] = useState<boolean>(false);

    const handleChange = (eventName: string, eventValue :number|string) => {
     dispatchMortgageDetails( eventName, eventValue, mortgageDetails)
    };

    const submitCalculateMortgage = async () => {
      await fetchMortgageCalculation(mortgageDetails);
      setDisplaySummaryTable( true );
    }

    const [interestDetails, setInterestDetails] = useState({
      totalAmountInPeriod: 0,
      totalInterestInPeriod: 0,
      mortgageAmountPerMonth: 0,
      termInterestAmount: 0,
      termPrincipleAmount: 0
    });

  // calculate mortgage on initial render
  useEffect(() => {
    loadMortgageInitialParameters();
  }, []);

  const renderSummaryTable = () => {
    if( displaySummaryTable ){
      const summaryTableProps: CalculationSummaryProps = {
        term: mortgageDetails.term,
        amortizationPeriodYear: mortgageDetails.amortizationYear,
        mortgageAmountPerMonth: 0,
        prepaymentAmount: mortgageDetails.prepaymentAmount,
        termPrincipleAmount: 0,
        mortgageAmount: mortgageDetails.mortgageAmount,
        termInterestAmount: 0,
        totalInterestInPeriod: 0,
        totalAmountInPeriod: 0
      };
      return <CalculationSummary {...summaryTableProps} />
    }
    return;
  }

  const inputPropoForm: CalculatorInputFormProps = {
    ...mortgageDetails,
    handleChange,
    initialMortgageDetails,
    submitCalculateMortgage
  }

  

  return (
    <>
      <CalculatorInputForm {...inputPropoForm}/>
      {renderSummaryTable()}
    </>
  );
};

export default MortgageCalculator;