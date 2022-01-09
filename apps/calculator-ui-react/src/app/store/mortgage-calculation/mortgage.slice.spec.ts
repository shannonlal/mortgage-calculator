import { MortgageResult } from '@mortgage-calculator/models';
import { LoadingState } from '../models';
import { store } from '../store';
import { startCalculateMortgage, calculateMortgageSuccess } from './mortgage.slice';

describe('calculator Mortgage Slice', () => {

    it('should verify calculateMortgage is defined', () => {
        expect( startCalculateMortgage ).toBeDefined();
    });

    it('should get initial Mortgage Result State ', () =>{
        const initialState: LoadingState<MortgageResult> = store.getState().mortgage;
        expect( initialState ).toBeDefined();
    });

    it('should get initial Mortgage Result State ', () =>{
        const initialState: LoadingState<MortgageResult> = store.getState().mortgage;

        expect( initialState ).toBeDefined();
        expect( initialState.data ).toBeDefined();

        expect( initialState.data.monthlyPayment ).toBe(1213.12);
    });

    it( 'should load calculate mortgage start', () => {
        const initialState: LoadingState<MortgageResult> = store.getState().mortgage;
        expect( initialState.loading).toBe( false );
        store.dispatch( startCalculateMortgage() );

        const updatedState: LoadingState<MortgageResult> = store.getState().mortgage;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(true);
    });

    it( 'should load calculate mortgage success', () => {
        const mortgageResult:MortgageResult = {
            id: `1231313123123`,
            monthlyPayment: 1213.12,
            creationDate: new Date().toISOString()
        };

        store.dispatch( calculateMortgageSuccess( mortgageResult ) );

        const updatedState: LoadingState<MortgageResult> = store.getState().mortgage;

        expect( updatedState ).toBeDefined();
    });
});