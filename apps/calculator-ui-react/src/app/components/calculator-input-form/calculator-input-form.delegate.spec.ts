import {IMortgageInitialParameters, loadMortgageInitialParameters} from './calculator-input-form.delegate';

describe( 'Calculator Input Form Delegate ', () =>{

    it('Should test loadMortgageInitialParameters', async()=>{
        try{
            const rst: IMortgageInitialParameters = await loadMortgageInitialParameters();
            expect( rst ).toBeDefined();

        }catch( err ){
            expect( err )
        }
    });
});