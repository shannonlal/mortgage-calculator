import { Injectable } from '@nestjs/common';
import { Term } from '@mortgage-calculator/models';

//console.log( 'Out', Term);
// TODO: Have Term duration be configurable and passed in as env
const TERM_DURATION = 30;
@Injectable()
export class TermService {

    /**
     * The following function will return a an array of Terms
     * @returns 
     */
    public async getTerms(): Promise<Array<Term>>{
        let terms: Array<Term> = [];
        for( let i = 0; i < TERM_DURATION; i++){
            const duration = i+1;
            let label = `${duration} Years`;

            // Special condition for first year
            if( i === 0 ){
                label = `${duration} Year`;
            }
            terms[i] = {
                label,
                duration 
            }
        }
        return Promise.resolve( terms );
    }
}
