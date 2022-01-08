import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MortgageDetails, RateType } from "@mortgage-calculator/models"; 
import { LoadingState } from "../models";

const initialState: LoadingState<MortgageDetails> = {
  data: {
    mortgageAmount: 100000,
    prepaymentAmount: 10000,
    interestRate: 2.00,
    amortizationYear: 5,
    amortizationMonth: 2,
    interestRateType: RateType.FIXED,
    paymentFrequency: 52,
    term: 5,
  },
  loading: false,
  errorMessage:''
}

const mortgageSlice = createSlice({
  initialState,
  name: "mortgage",
  reducers: {
    startCalculateMortgage: ( state: LoadingState<MortgageDetails> , action: PayloadAction<void>)=>{
        state.loading = true;
    },
    calculateMortgageSuccess: ( state: LoadingState<MortgageDetails> , action: PayloadAction<MortgageDetails>) => {
        state.loading = false;
        state.data = action.payload;
    },
    calculateMortgageError: (state: LoadingState<MortgageDetails>, action: PayloadAction<string>) => {
        state.errorMessage = action.payload
    }
  },
});

export const { startCalculateMortgage, calculateMortgageSuccess, calculateMortgageError } = mortgageSlice.actions;
export default mortgageSlice.reducer;