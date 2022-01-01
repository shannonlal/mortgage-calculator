import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Term } from "@mortgage-calculator/models"; 

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
    startLoadingTerms: ( state: MortgageFixedDataState, action: PayloadAction<void>)=>{
        state.terms.loading = true;
    },
    loadTermsSuccess: ( state: MortgageFixedDataState, action: PayloadAction<Array<Term>>) => {
        state.terms.loading = false;
        state.terms.data = action.payload
    },
    loadTermsError: (state: MortgageFixedDataState, action: PayloadAction<string>) => {
        state.terms.errorMessage = action.payload
    }
  },
});

export const { startLoadingTerms, loadTermsSuccess, loadTermsError } = mortgageCalculationFixedData.actions;
export default mortgageCalculationFixedData.reducer;