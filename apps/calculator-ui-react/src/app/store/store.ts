import { configureStore } from '@reduxjs/toolkit';
import mortgageReducer from './mortgageSlice';
import termsFixedData from './fixeddata/termsData.slice';
export const store = configureStore({
    reducer: {
        mortgage: mortgageReducer,
        terms: termsFixedData
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;