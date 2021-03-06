import { AmortizationPeriod } from "@mortgage-calculator/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../models";

const initialState: LoadingState<AmortizationPeriod> = {
    data: {
        months:[],
        years: []
    },
    loading: false,
    errorMessage:''
};

const amortizationPeriodFixedData = createSlice({
  initialState,
  name: "amortizationPeriodData",
  reducers: {
    startLoadingAmoritizationPeriod: ( state: LoadingState<AmortizationPeriod> , action: PayloadAction<void>)=>{
        state.loading = true;
    },
    loadAmoritizationPeriodSuccess: ( state: LoadingState<AmortizationPeriod> , action: PayloadAction<AmortizationPeriod>) => {
        state.loading = false;
        state.data = action.payload
    },
    loadAmoritizationPeriodError: (state: LoadingState<AmortizationPeriod> , action: PayloadAction<string>) => {
        state.errorMessage = action.payload
        state.loading = false;
    }
  },
});

export const { startLoadingAmoritizationPeriod, loadAmoritizationPeriodSuccess, loadAmoritizationPeriodError } = amortizationPeriodFixedData.actions;
export default amortizationPeriodFixedData.reducer;