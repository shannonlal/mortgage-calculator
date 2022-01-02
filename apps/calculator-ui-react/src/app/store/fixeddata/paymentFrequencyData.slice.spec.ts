import { store } from '../store';
import { startLoadingPaymentFrequency, loadPaymentFrequencySuccess, loadPaymentFrequencyError } from './paymentFrequencyData.slice';
import { PaymentFrequency } from '@mortgage-calculator/models';
import { LoadingState } from '../models';

describe('Fixed Data Payment Frequency Data', () => {

    it('should verify startLoadingTerms is defined', () => {
        expect( startLoadingPaymentFrequency ).toBeDefined();
    });

    it('should get initial mortgage fixed data state ', () =>{
        const initialState: LoadingState<Array<PaymentFrequency>> = store.getState().paymentFrequency;

        expect( initialState ).toBeDefined();

        expect( initialState.loading ).toBe(false);
        expect( initialState.data.length).toBe(0);
        expect( initialState.errorMessage).toBe('');
    });

    it('should dispatch startLoadingTerms ', () =>{
        const initialState: LoadingState<Array<PaymentFrequency>> = store.getState().paymentFrequency;

        expect( initialState.loading).toBe( false );
        store.dispatch( startLoadingPaymentFrequency());


        const updatedState: LoadingState<Array<PaymentFrequency>> = store.getState().paymentFrequency;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(true);
    });

    it('should dispatch loadPaymentFrequencySuccess ', () =>{
        const initialState: LoadingState<Array<PaymentFrequency>> = store.getState().paymentFrequency;

        expect( initialState.data.length).toBe( 0 );

        const paymentFrequencies: Array<PaymentFrequency> = [
          {
              "label": "Weekly",
              "value": 52
          },
          {
              "label": "Accelerated Bi-Weekly",
              "value": 26
          },
          {
              "label": "Semi-Monthly",
              "value": 24
          },
          {
              "label": "Monthly",
              "value": 12
          }
        ];
        store.dispatch( loadPaymentFrequencySuccess(paymentFrequencies));


        const updatedState: LoadingState<Array<PaymentFrequency>> = store.getState().paymentFrequency;

        expect( updatedState ).toBeDefined();
        expect( updatedState.data.length).toBe(4);
    });

    it('should dispatch loadPaymentFrequencyError ', () =>{
        const error = `Unexpected error loading payment frequency`;
        store.dispatch( loadPaymentFrequencyError(error));

        const updatedState: LoadingState<Array<PaymentFrequency>> = store.getState().paymentFrequency;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(false);
        expect( updatedState.errorMessage).toBe(error);
    });
});