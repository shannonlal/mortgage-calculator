import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MortgageResult } from "@mortgage-calculator/models"; 
import { LoadingState } from "../models";

const initialState: LoadingState<MortgageResult> = {
  data: {
    id: `1231313123123`,
    monthlyPayment: 0,
    creationDate: new Date().toISOString(),
    mortgageAmountPerMonth: 0,
    termPrincipleAmount: 0,
    termInterestAmount: 3000,
    totalInterestInPeriod: 400,
    totalAmountInPeriod: 3000
  },
  loading: false,
  errorMessage:''
}

const mortgageSlice = createSlice({
  initialState,
  name: "mortgage",
  reducers: {
    startCalculateMortgage: ( state: LoadingState<MortgageResult> , action: PayloadAction<void>)=>{
        state.loading = true;
    },
    calculateMortgageSuccess: ( state: LoadingState<MortgageResult> , action: PayloadAction<MortgageResult>) => {
        state.loading = false;
        state.data = action.payload;
    },
    calculateMortgageError: (state: LoadingState<MortgageResult>, action: PayloadAction<string>) => {
        state.errorMessage = action.payload
    }
  },
});

export const { startCalculateMortgage, calculateMortgageSuccess, calculateMortgageError } = mortgageSlice.actions;
export default mortgageSlice.reducer;