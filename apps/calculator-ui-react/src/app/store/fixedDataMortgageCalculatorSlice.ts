import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MortgageDetails,Term } from "@mortgage-calculator/models"; 

interface LoadingState<T> {
    data:T;
    loading: boolean;
    errorMessage: string;
};



export interface MortgageFixedDataState {
    terms: LoadingState<Array<Term>>;
}

const initialState: MortgageFixedDataState = {
  terms:{
      data:[],
      loading: false,
      errorMessage:''
  }
}

const mortgageCalculationFixedData = createSlice({
  initialState,
  name: "mortgageCalculationFixedData",
  reducers: {
    startLoadingTerms( state, action: PayloadAction<boolean>) {
        state.terms.loading = true;
    }
  },
});

export const { startLoadingTerms } = mortgageCalculationFixedData.actions;
export default mortgageCalculationFixedData.reducer;