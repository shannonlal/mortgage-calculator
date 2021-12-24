import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MortgageDetails, RateType } from "@mortgage-calculator/models"; 

export interface MortgageDetailsState {
    mortgageDetails: MortgageDetails
}

const initialState: MortgageDetailsState = {
  mortgageDetails: {
    mortgageAmount: 100000,
    prepaymentAmount: 10000,
    interestRate: 2.00,
    amortizationYear: 5,
    amortizationMonth: 2,
    interestRateType: RateType.FIXED,
    paymentFrequency: 52,
    term: 5,
  }
}

const mortgageSlice = createSlice({
  initialState,
  name: "mortgage",
  reducers: {
    calculateMortgage(state, action: PayloadAction<MortgageDetails>) {
      state.mortgageDetails = action.payload;
    }
  },
});

export const { calculateMortgage } = mortgageSlice.actions;
export default mortgageSlice.reducer;