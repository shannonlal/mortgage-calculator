import { configureStore } from '@reduxjs/toolkit';
import mortgageReducer from './mortgageSlice';
import mortgageCalculationFixedDataReduce from './fixedDataMortgageCalculator.slice';
export const store = configureStore({
    reducer: {
        mortgage: mortgageReducer,
        mortgageCalculationFixedDataReduce: mortgageCalculationFixedDataReduce
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;