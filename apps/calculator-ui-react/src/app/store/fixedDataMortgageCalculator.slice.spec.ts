import { store } from './store';
import { startLoadingTerms, MortgageFixedDataState } from './fixedDataMortgageCalculator.slice';

describe('Fixed Data Mortgage Calculator Slice', () => {

    it('should verify startLoadingTerms is defined', () => {
        expect( startLoadingTerms ).toBeDefined();
    });

    it('should get initial mortgage fixed data state ', () =>{
        const initialState: MortgageFixedDataState = store.getState().mortgageCalculationFixedDataReduce;

        expect( initialState ).toBeDefined();
        expect( initialState.terms ).toBeDefined();

        expect( initialState.terms.loading ).toBe(false);
        expect( initialState.terms.data.length).toBe(0);
        expect( initialState.terms.errorMessage).toBe('');
    });

    it('should dispatch startLoadingTerms ', () =>{
        const initialState: MortgageFixedDataState = store.getState().mortgageCalculationFixedDataReduce;

        expect( initialState.terms.loading).toBe( false );
        store.dispatch( startLoadingTerms());


        const updatedState: MortgageFixedDataState = store.getState().mortgageCalculationFixedDataReduce;

        expect( updatedState ).toBeDefined();
        expect( updatedState.terms.loading).toBe(true);
    });
});