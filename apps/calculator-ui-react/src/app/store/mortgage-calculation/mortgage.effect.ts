import { MortgageDetails, MortgageResult } from '@mortgage-calculator/models';
import { calculateMortgage } from '@mortgage-calculator/shared-ui-services';
import { store } from '../store';
import { startCalculateMortgage, calculateMortgageSuccess, calculateMortgageError } from './mortgage.slice';

const baseUrl = `http://localhost:3334`;
/**
 * The following method will get the terms and load them into the store
 * @returns 
 */
export const fetchMortgageCalculation = async ( mortgageDetails: MortgageDetails): Promise<void> => {
    try{
        store.dispatch( startCalculateMortgage());

        const mortgageResult: MortgageResult = await calculateMortgage( baseUrl,mortgageDetails );

        store.dispatch( calculateMortgageSuccess( mortgageResult ));
    }catch(err){
        store.dispatch( calculateMortgageError( `Unexpected error loading terms` ));
    }
}
