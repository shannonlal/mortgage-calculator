import { configureStore } from '@reduxjs/toolkit';
import mortgageReducer from './mortgage-calculation/mortgageSlice';
import termsFixedData from './fixeddata/termsData.slice';
import rateTypeFixedData from './fixeddata/rateType.slice';
export const store = configureStore({
    reducer: {
        mortgage: mortgageReducer,
        terms: termsFixedData,
        rateType: rateTypeFixedData
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;