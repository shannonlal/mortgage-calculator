import { store } from '../store';
import { startLoadingRateType, loadRateTypeSuccess, loadRateTypeError } from './rateType.slice';
import { LoadingState } from '../models';

describe('Fixed Data Rate Type Slice', () => {

    it('should verify startLoadingRateType is defined', () => {
        expect( startLoadingRateType ).toBeDefined();
    });

    it('should get initial rate type fixed data ', () =>{
        const initialState: LoadingState<Array<string>> = store.getState().rateType;

        expect( initialState ).toBeDefined();

        expect( initialState.loading ).toBe(false);
        expect( initialState.data.length).toBe(0);
        expect( initialState.errorMessage).toBe('');
    });

    it('should dispatch startLoadingTerms ', () =>{
        const initialState: LoadingState<Array<string>> = store.getState().rateType;

        expect( initialState.loading).toBe( false );
        store.dispatch( startLoadingRateType());

        const updatedState: LoadingState<Array<string>> = store.getState().rateType;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(true);
    });

    it('should dispatch loadRateTypeSuccess ', () =>{
        const initialState: LoadingState<Array<string>> = store.getState().rateType;

        expect( initialState.data.length).toBe( 0 );

        const rateTypes: Array<string> =  [
            "FIXED",
            "VARIABLE"
        ];
        store.dispatch( loadRateTypeSuccess(rateTypes));


        const updatedState: LoadingState<Array<string>> = store.getState().rateType;

        expect( updatedState ).toBeDefined();
        expect( updatedState.data.length).toBe(2);
    });

    it('should dispatch loadRateTypeError ', () =>{
        const error = `Unexpected error loading rate types`;
        store.dispatch( loadRateTypeError(error));

        const updatedState: LoadingState<Array<string>> = store.getState().rateType;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(false);
        expect( updatedState.errorMessage).toBe(error);
    });
});