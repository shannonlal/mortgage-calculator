import { InterestRate, RateType } from "@mortgage-calculator/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../models";

const initialState: LoadingState<InterestRate> = {
    data: {
        type: RateType.FIXED,
        rate: 1.01
    },
    loading: false,
    errorMessage:''
};

const interestRateData = createSlice({
  initialState,
  name: "interestRateData",
  reducers: {
    startLoadingInterestRate: ( state: LoadingState<InterestRate> , action: PayloadAction<void>)=>{
        state.loading = true;
    },
    loadInterestRateSuccess: ( state: LoadingState<InterestRate> , action: PayloadAction<InterestRate>) => {
        state.loading = false;
        state.data = action.payload
    },
    loadInterestRateError: (state: LoadingState<InterestRate> , action: PayloadAction<string>) => {
        state.errorMessage = action.payload
        state.loading = false;
    }
  },
});

export const { startLoadingInterestRate, loadInterestRateSuccess, loadInterestRateError } = interestRateData.actions;
export default interestRateData.reducer;