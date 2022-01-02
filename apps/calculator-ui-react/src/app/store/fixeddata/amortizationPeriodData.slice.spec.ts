import { store } from '../store';
import { startLoadingAmoritizationPeriod, loadAmoritizationPeriodSuccess, loadAmoritizationPeriodError } from './amortizationPeriodData.slice';
import { LoadingState } from '../models';
import { AmortizationPeriod } from '@mortgage-calculator/models';

describe('Fixed Data Amortization Period Slice', () => {

    it('should verify startLoadingAmoritizationPeriod is defined', () => {
        expect( startLoadingAmoritizationPeriod ).toBeDefined();
    });

    it('should get initial amoritization period fixed data ', () =>{
        const initialState: LoadingState<AmortizationPeriod> = store.getState().amortization;

        expect( initialState ).toBeDefined();

        expect( initialState.loading ).toBe(false);
        expect( initialState.data).toBeDefined();
        expect( initialState.data.months.length).toBe(0);
        expect( initialState.data.years.length).toBe(0);
        expect( initialState.errorMessage).toBe('');
    });

    it('should dispatch startLoadingAmoritizationPeriod ', () =>{
        const initialState: LoadingState<AmortizationPeriod> = store.getState().amortization;

        expect( initialState.loading).toBe( false );
        store.dispatch( startLoadingAmoritizationPeriod());

        const updatedState: LoadingState<AmortizationPeriod> = store.getState().amortization;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(true);
    });

    it('should dispatch loadAmoritizationPeriodSuccess ', () =>{
        const initialState: LoadingState<AmortizationPeriod> = store.getState().amortization;

        expect( initialState.data.years.length).toBe( 0 );

        const ap: AmortizationPeriod =  {
            months:  [
                  {
                      "label": "1 Month",
                      "value": 1
                  },
                  {
                      "label": "2 Months",
                      "value": 2
                  }
            ],
            years : [
              {
                "label": "1 Year",
                "value": 1
              },
              {
                  "label": "2 Years",
                  "value": 2
              }
            ]
        };
        store.dispatch( loadAmoritizationPeriodSuccess(ap));


        const updatedState: LoadingState<AmortizationPeriod> = store.getState().amortization;

        expect( updatedState ).toBeDefined();
        expect( updatedState.data.years.length).toBe(2);
        expect( updatedState.data.months.length).toBe(2);
        expect( updatedState.loading).toBe( false );
        expect( updatedState.errorMessage).toBe( '' );
    });

    it('should dispatch loadAmoritizationPeriodError ', () =>{
        const error = `Unexpected error loading Amortization Period`;
        store.dispatch( loadAmoritizationPeriodError(error));

        const updatedState: LoadingState<AmortizationPeriod> = store.getState().amortization;

        expect( updatedState ).toBeDefined();
        expect( updatedState.loading).toBe(false);
        expect( updatedState.errorMessage).toBe(error);
    });
});