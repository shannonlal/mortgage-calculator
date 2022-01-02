import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Term } from "@mortgage-calculator/models";
import { LoadingState } from "../models";

const initialState: LoadingState<Array<Term>> = {
    data:[],
    loading: false,
    errorMessage:''
};

const termsFixedData = createSlice({
  initialState,
  name: "terms",
  reducers: {
    startLoadingTerms: ( state: LoadingState<Array<Term>> , action: PayloadAction<void>)=>{
        state.loading = true;
    },
    loadTermsSuccess: ( state: LoadingState<Array<Term>> , action: PayloadAction<Array<Term>>) => {
        console.log( 'Get Payload', action);
        state.loading = false;
        state.data = action.payload;
    },
    loadTermsError: (state: LoadingState<Array<Term>> , action: PayloadAction<string>) => {
        state.errorMessage = action.payload
    }
  },
});

export const { startLoadingTerms, loadTermsSuccess, loadTermsError } = termsFixedData.actions;
export default termsFixedData.reducer;