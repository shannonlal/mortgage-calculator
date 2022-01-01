import { store } from './store';
import { startLoadingTerms, loadTermsSuccess, MortgageFixedDataState, loadTermsError } from './fixedDataMortgageCalculator.slice';
import { Term } from '@mortgage-calculator/models';

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

    it('should dispatch loadTermsSuccess ', () =>{
        const initialState: MortgageFixedDataState = store.getState().mortgageCalculationFixedDataReduce;

        expect( initialState.terms.data.length).toBe( 0 );

        const terms: Array<Term> =  [
            {
                "label": "1 Year",
                "value": 1
            },
            {
                "label": "2 Years",
                "value": 2
          }];
        store.dispatch( loadTermsSuccess(terms));


        const updatedState: MortgageFixedDataState = store.getState().mortgageCalculationFixedDataReduce;

        expect( updatedState ).toBeDefined();
        expect( updatedState.terms.data.length).toBe(2);
    });

    it('should dispatch loadTermsError ', () =>{
        const error = `Unexpected error loading terms`;
        store.dispatch( loadTermsError(error));

        const updatedState: MortgageFixedDataState = store.getState().mortgageCalculationFixedDataReduce;

        expect( updatedState ).toBeDefined();
        expect( updatedState.terms.loading).toBe(false);
        expect( updatedState.terms.errorMessage).toBe(error);
    });
});