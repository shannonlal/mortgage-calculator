import { configureStore } from '@reduxjs/toolkit';
import mortgageReducer from './mortgageSlice';
export const store = configureStore({
    reducer: {
        mortgage: mortgageReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;