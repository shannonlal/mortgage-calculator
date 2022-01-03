import { Injectable, Logger } from '@nestjs/common';
import { CalculationResult } from '../models/calculation-result.model';
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
            this.logger.log(`Calculating the mortgage amount ${inputData}`);

            const calculation: CalculationResult = {
                id: `1231233213`,
                monthlyPayment: 1212.31,
                creationDate: new Date()
            }
            return Promise.resolve( calculation );
        }catch( err ){
            this.logger.error(`Unexpected error calculating mortgage ${err}`);
            throw err;
        }
    }
}