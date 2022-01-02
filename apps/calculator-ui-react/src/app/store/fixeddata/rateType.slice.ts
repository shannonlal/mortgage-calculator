import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../models";

const initialState: LoadingState<Array<string>> = {
    data:[],
    loading: false,
    errorMessage:''
};

const rateTypeFixedData = createSlice({
  initialState,
  name: "mortgageCalculationFixedData",
  reducers: {
    startLoadingRateType: ( state: LoadingState<Array<string>> , action: PayloadAction<void>)=>{
        state.loading = true;
    },
    loadRateTypeSuccess: ( state: LoadingState<Array<string>> , action: PayloadAction<Array<string>>) => {
        state.loading = false;
        state.data = action.payload
    },
    loadRateTypeError: (state: LoadingState<Array<string>> , action: PayloadAction<string>) => {
        state.errorMessage = action.payload
    }
  },
});

export const { startLoadingRateType, loadRateTypeSuccess, loadRateTypeError } = rateTypeFixedData.actions;
export default rateTypeFixedData.reducer;