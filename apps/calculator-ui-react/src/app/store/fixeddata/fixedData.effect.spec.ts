import { store } from '../store';
//import { getTerms } from '@mortgage-calculator/shared-ui-services';
//import configureStore from 'redux-mock-store';  
import { fetchTerms } from './fixedData.effect';
import { LoadingState } from '../models';
import { Term } from '@mortgage-calculator/models';


//const middlewares:unknown = [];
//const store = configureStore(middlewares);

/*const initialTermState: LoadingState<Array<Term>> = {
    data:[],
    loading: false,
    errorMessage:''
}*/
//const mockStore = store(initialTermState);
// test.js
jest.mock('@mortgage-calculator/shared-ui-services', () => ({
    getTerms: async (): Promise<Array<Term>> => {
        console.log( 'Calling Mock GetTerms');
        return Promise.resolve( 
            [
                {
                    "label": "1 Year",
                    "value": 1
                },
                {
                    "label": "2 Years",
                    "value": 2
                }
            ]
        )
    },
}));

describe('Fixed Data Fetch Terms', () => {

    it('should verify fetchTerms is defined', () => {
        expect( fetchTerms ).toBeDefined();
    });

    it('should fetch data ', async () =>{

        //const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { id: '1' } });
        const initialState: LoadingState<Array<string>> = store.getState().rateType;

        expect( initialState ).toBeDefined();

        await fetchTerms();
        expect( initialState.loading ).toBe(false);
        //const actions = mockStore.getActions();

        //console.log( 'Actions', actions);
        //expect( mockStore ).toBeCalled();
        //expect( initialState.errorMessage).toBe('');
    });
});