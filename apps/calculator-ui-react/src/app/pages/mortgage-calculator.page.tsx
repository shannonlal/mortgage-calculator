import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CalculatorInputForm, CalculatorInputFormProps } from '../components/calculator-input-form/calculator-input-form';
import { CalculationSummary, CalculationSummaryProps } from '../components/calculation-summary/calculation-summary';
import { MortgageDetails, MortgageResult, RateType } from "@mortgage-calculator/models";
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

     if( eventName === 'mortgageamount'){ 
      setMortgageDetails( {...mortgageDetails,  mortgageAmount: Number(eventValue) });
     } else if( eventName === 'prepaymentAmount'){ 
      setMortgageDetails( {...mortgageDetails,  prepaymentAmount: Number(eventValue) });
     } else if( eventName === 'interestRate'){ 
      setMortgageDetails( {...mortgageDetails,  interestRate: Number(eventValue) });
     } else if( eventName === 'paymentFrequency'){ 
      setMortgageDetails( {...mortgageDetails,  paymentFrequency: Number(eventValue) });
     } else if( eventName === 'term'){ 
      setMortgageDetails( {...mortgageDetails,  term: Number(eventValue) });
     } else if( eventName === 'amortizationYear'){ 
      setMortgageDetails( {...mortgageDetails,  amortizationYear: Number(eventValue) });
     } else { 
      setMortgageDetails( {...mortgageDetails,  amortizationMonth: Number(eventValue) });
     } 
  }

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

    const mortgageResult: MortgageResult = useAppSelector( state => state.mortgage.data);

    const handleChange = (eventName: string, eventValue :number|string) => {
     dispatchMortgageDetails( eventName, eventValue, mortgageDetails)
    };

    const submitCalculateMortgage = async () => {
      await fetchMortgageCalculation(mortgageDetails);
      setDisplaySummaryTable( true );
    }

    /*const [interestDetails, setInterestDetails] = useState({
      totalAmountInPeriod: 0,
      totalInterestInPeriod: 0,
      mortgageAmountPerMonth: 0,
      termInterestAmount: 0,
      termPrincipleAmount: 0
    });*/

  // calculate mortgage on initial render
  useEffect(() => {
    loadMortgageInitialParameters();
  }, []);

  const renderSummaryTable = () => {
    if( displaySummaryTable ){
      const summaryTableProps: CalculationSummaryProps = {
        term: mortgageDetails.term,
        amortizationPeriodYear: mortgageDetails.amortizationYear,
        mortgageAmountPerMonth: mortgageResult.mortgageAmountPerMonth,
        prepaymentAmount: mortgageDetails.prepaymentAmount,
        termPrincipleAmount: mortgageResult.termPrincipleAmount,
        mortgageAmount: mortgageDetails.mortgageAmount,
        termInterestAmount: mortgageResult.termInterestAmount,
        totalInterestInPeriod: mortgageResult.totalInterestInPeriod,
        totalAmountInPeriod: mortgageResult.totalAmountInPeriod
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