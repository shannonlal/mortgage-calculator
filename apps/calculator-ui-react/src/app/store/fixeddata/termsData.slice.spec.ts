import { store } from '../store';
import { startLoadingTerms, loadTermsSuccess, loadTermsError } from './termsData.slice';
import { Term } from '@mortgage-calculator/models';
import { LoadingState } from '../models';

describe('Fixed Data Mortgage Calculator Slice', () => {

    it('should verify startLoadingTerms is defined', () => {
        expect( startLoadingTerms ).toBeDefined();
    });

    it('should get initial mortgage fixed data state ', () =>{
        const initialState: LoadingState<Array<Term>> = store.getState().terms;

        expect( initialState ).toBeDefined();

        expect( initialState.loading ).toBe(false);
        expect( initialState.data.length).toBe(0);
        expect( initialState.errorMessage).toBe('');
    });

    it('should dispatch startLoadingTerms ', () =>{
        const initialState: LoadingState<Array<Term>> = store.getState().terms;

        expect( initialState.loading).toBe( false );
        store.dispatch( startLoadingTerms());


        const updatedState: LoadingState<Array<Term>> = store.getState().terms;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(true);
    });

    it('should dispatch loadTermsSuccess ', () =>{
        const initialState: LoadingState<Array<Term>> = store.getState().terms;

        expect( initialState.data.length).toBe( 0 );

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


        const updatedState: LoadingState<Array<Term>> = store.getState().terms;

        expect( updatedState ).toBeDefined();
        expect( updatedState.data.length).toBe(2);
    });

    it('should dispatch loadTermsError ', () =>{
        const error = `Unexpected error loading terms`;
        store.dispatch( loadTermsError(error));

        const updatedState: LoadingState<Array<Term>> = store.getState().terms;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(false);
        expect( updatedState.errorMessage).toBe(error);
    });
});