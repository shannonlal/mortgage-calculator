import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentFrequency } from "@mortgage-calculator/models";
import { LoadingState } from "../models";

const initialState: LoadingState<Array<PaymentFrequency>> = {
    data:[],
    loading: false,
    errorMessage:''
};

const paymentFrequencyFixedData = createSlice({
  initialState,
  name: "paymentFrequency",
  reducers: {
    startLoadingPaymentFrequency: ( state: LoadingState<Array<PaymentFrequency>> , action: PayloadAction<void>)=>{
        state.loading = true;
    },
    loadPaymentFrequencySuccess: ( state: LoadingState<Array<PaymentFrequency>> , action: PayloadAction<Array<PaymentFrequency>>) => {
        state.loading = false;
        state.data = action.payload;
    },
    loadPaymentFrequencyError: (state: LoadingState<Array<PaymentFrequency>> , action: PayloadAction<string>) => {
        state.errorMessage = action.payload
    }
  },
});

export const { startLoadingPaymentFrequency, loadPaymentFrequencySuccess, loadPaymentFrequencyError } = paymentFrequencyFixedData.actions;
export default paymentFrequencyFixedData.reducer;