import { store } from '../store';
import { startLoadingInterestRate, loadInterestRateSuccess, loadInterestRateError } from './interestRateData.slice';
import { LoadingState } from '../models';
import { InterestRate, RateType } from '@mortgage-calculator/models';

describe('Fixed Data Interest Rate Slice', () => {

    it('should verify startLoadingInterestRate is defined', () => {
        expect( startLoadingInterestRate ).toBeDefined();
    });

    it('should get initial amoritization period fixed data ', () =>{
        const initialState: LoadingState<InterestRate> = store.getState().interestRate;

        expect( initialState ).toBeDefined();

        expect( initialState.loading ).toBe(false);
        expect( initialState.data).toBeDefined();
        expect( initialState.data.rate).toBe(1.01);
        expect( initialState.data.type).toBe(RateType.FIXED);
        expect( initialState.errorMessage).toBe('');
    });

    it('should dispatch startLoadingAmoritizationPeriod ', () =>{
        const initialState: LoadingState<InterestRate> = store.getState().interestRate;

        expect( initialState.loading).toBe( false );
        store.dispatch( startLoadingInterestRate());

        const updatedState: LoadingState<InterestRate> = store.getState().interestRate;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(true);
    });

    it('should dispatch loadInterestRateSuccess ', () =>{
        const ir: InterestRate =  {
            type:RateType.VARIABLE,
            rate: 2.01
        };
        store.dispatch( loadInterestRateSuccess(ir));


        const updatedState: LoadingState<InterestRate> = store.getState().interestRate;

        expect( updatedState ).toBeDefined();
        expect( updatedState.data.type).toBe(RateType.VARIABLE);
        expect( updatedState.data.rate).toBe(2.01);
        expect( updatedState.loading).toBe( false );
        expect( updatedState.errorMessage).toBe( '' );
    });

    it('should dispatch loadInterestRateError ', () =>{
        const error = `Unexpected error loading Interest Rate`;
        store.dispatch( loadInterestRateError(error));

        const updatedState: LoadingState<InterestRate> = store.getState().interestRate;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(false);
        expect( updatedState.errorMessage).toBe(error);
    });
});