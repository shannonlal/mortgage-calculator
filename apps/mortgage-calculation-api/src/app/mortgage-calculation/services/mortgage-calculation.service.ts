import { Injectable, Logger } from '@nestjs/common';
import { CalculationResult } from '../dto/calculation-result.output';
import { MortgageDetailsInput } from '../dto/mortgage-details.input';

@Injectable()
export class MortgageCalculationService {
    private readonly logger = new Logger(MortgageCalculationService.name);

    /**
     * The following function will calculate the monthly payment based on the mortgage 
     * parameters that were provided
     * @param inputData 
     * @returns 
     */
    async calculateMortgae(inputData: MortgageDetailsInput): Promise<CalculationResult> {
        try{
            this.logger.log(`Calculating the mortgage amount ${JSON.stringify(inputData)}`);

            const calculation: CalculationResult = {
                id: `1231233213`,
                monthlyPayment: 1212.31,
                creationDate: new Date().toISOString(),
                mortgageAmountPerMonth: 1212.31,
                termPrincipleAmount: 10000,
                termInterestAmount: 3000,
                totalInterestInPeriod: 400,
                totalAmountInPeriod: 3000
            }
            return Promise.resolve( calculation );
        }catch( err ){
            this.logger.error(`Unexpected error calculating mortgage ${err}`);
            throw err;
        }
    }


    /**
     * The following function will calculate the monthly payment based on the mortgage 
     * amount only
     * @param mortgageAmount 
     * @returns 
     */
     async calculateDefaultMortgae(mortgageAmount: number): Promise<CalculationResult> {
        try{
            this.logger.log(`Calculating the mortgage amount ${mortgageAmount}`);

            const calculation: CalculationResult = {
                id: `1231233213`,
                monthlyPayment: 1212.31,
                creationDate: new Date().toISOString(),
                mortgageAmountPerMonth: 1212.31,
                termPrincipleAmount: 10000,
                termInterestAmount: 3000,
                totalInterestInPeriod: 400,
                totalAmountInPeriod: 3000
            }
            return Promise.resolve( calculation );
        }catch( err ){
            this.logger.error(`Unexpected error calculating mortgage ${err}`);
            throw err;
        }
    }
}