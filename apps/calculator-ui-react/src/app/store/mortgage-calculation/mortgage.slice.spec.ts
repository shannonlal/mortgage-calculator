import { MortgageDetails, RateType } from '@mortgage-calculator/models';
import { LoadingState } from '../models';
import { store } from '../store';
import { startCalculateMortgage, calculateMortgageSuccess } from './mortgage.slice';

describe('calculator Mortgage Slice', () => {

    it('should verify calculateMortgage is defined', () => {
        expect( startCalculateMortgage ).toBeDefined();
    });

    it('should get initial Mortgage Details State ', () =>{
        const initialState: LoadingState<MortgageDetails> = store.getState().mortgage;
        expect( initialState ).toBeDefined();
    });

    it('should get initial Mortgage Details State ', () =>{
        const initialState: LoadingState<MortgageDetails> = store.getState().mortgage;

        expect( initialState ).toBeDefined();
        expect( initialState.data ).toBeDefined();

        expect( initialState.data.interestRate ).toBe(2.00);
    });

    it( 'should load calculate mortgage start', () => {
        const initialState: LoadingState<MortgageDetails> = store.getState().mortgage;
        expect( initialState.loading).toBe( false );
        store.dispatch( startCalculateMortgage() );

        const updatedState: LoadingState<MortgageDetails> = store.getState().mortgage;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(true);
    });

    it( 'should load calculate mortgage success', () => {
        const mortgageDetails:MortgageDetails = {
            mortgageAmount: 100000,
            prepaymentAmount: 10000,
            interestRate: 2.00,
            amortizationYear: 5,
            amortizationMonth: 2,
            interestRateType: RateType.FIXED,
            paymentFrequency: 52,
            term: 5,
        };

        store.dispatch( calculateMortgageSuccess( mortgageDetails ) );

        const updatedState: LoadingState<MortgageDetails> = store.getState().mortgage;

        expect( updatedState ).toBeDefined();
    });
});