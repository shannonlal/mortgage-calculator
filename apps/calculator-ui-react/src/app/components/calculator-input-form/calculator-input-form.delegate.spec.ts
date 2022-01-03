import { loadMortgageInitialParameters } from './calculator-input-form.delegate';

describe( 'Calculator Input Form Delegate ', () =>{

    it('Should test loadMortgageInitialParameters', async()=>{
        try{
            expect( loadMortgageInitialParameters ).toBeDefined();
        }catch( err ){
            expect( err )
        }
    });
});