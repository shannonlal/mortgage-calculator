import { Term } from '@mortgage-calculator/models';
import { getTerms } from '@mortgage-calculator/shared-ui-services';
import { store } from '../store';
import { startLoadingTerms, loadTermsSuccess, loadTermsError } from './termsData.slice';

const baseUrl = `http://localhost:3333`;
/**
 * 
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