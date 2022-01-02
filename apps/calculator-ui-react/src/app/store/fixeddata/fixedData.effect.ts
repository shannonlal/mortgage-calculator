import { RateType, Term } from '@mortgage-calculator/models';
import { getTerms, getRateTypes } from '@mortgage-calculator/shared-ui-services';
import { store } from '../store';
import { startLoadingTerms, loadTermsSuccess, loadTermsError } from './termsData.slice';
import { startLoadingRateType, loadRateTypeSuccess, loadRateTypeError } from './rateType.slice';

const baseUrl = `http://localhost:3333`;
/**
 * The following method will get the terms and load them into the store
 * @returns 
 */
export const fetchTerms = async (): Promise<void> => {
    try{
        store.dispatch( startLoadingTerms());

        const terms: Array<Term> = await getTerms( baseUrl );

        store.dispatch( loadTermsSuccess( terms ));
    }catch(err){
        store.dispatch( loadTermsError( `Unexpected error loading terms` ));
    }
}

/**
 * The following method will get the terms and load them into the store
 * @returns 
 */
 export const fetchRateTypes = async (): Promise<void> => {
    try{
        store.dispatch( startLoadingRateType());

        const rateTypes: Array<RateType> = await getRateTypes( baseUrl );

        const rateTypeNames: Array<string> = rateTypes.map (rt => rt.toString())

        store.dispatch( loadRateTypeSuccess( rateTypeNames ));
    }catch(err){
        store.dispatch( loadRateTypeError( `Unexpected error loading rate types` ));
    }
}