import { store } from './store';
import { calculateMortgage, MortgageDetailsState} from './mortgageSlice';

describe('calculator Mortgage Slice', () => {

    it('should verify calculateMortgage is defined', () => {
        expect( calculateMortgage ).toBeDefined();
    });

    it('should get initial Mortgage Details State ', () =>{
        const initialState: MortgageDetailsState = store.getState().mortgage;

        expect( initialState ).toBeDefined();
        expect( initialState.mortgageDetails ).toBeDefined();

        expect( initialState.mortgageDetails.term ).toBe(5);
        expect( initialState.mortgageDetails.interestRate).toBe(2.00);
        expect( initialState.mortgageDetails.amortizationMonth).toBe(2);

    });

    it( 'should generate mortgage calculation', () => {
        const state: MortgageDetailsState = store.getState().mortgage;

        store.dispatch( calculateMortgage({...state.mortgageDetails,
            term:6, interestRate:3.00
        } ));

        const updatedState = store.getState().mortgage.mortgageDetails;

        expect( updatedState ).toBeDefined();
        expect( updatedState.term).toBe(6);
        expect( updatedState.interestRate).toBe(3.00);
    })
});