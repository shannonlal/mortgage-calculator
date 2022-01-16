import { Logger } from '@nestjs/common';
import { Args, Resolver, Query} from '@nestjs/graphql';
import { CalculationResult } from '../dto/calculation-result.output';
import { MortgageCalculationService } from '../services/mortgage-calculation.service';
import { MortgageDetailsInput } from '../dto/mortgage-details.input';


@Resolver(of => CalculationResult)
export class MortgageCalculationResolver {
    private readonly logger = new Logger(MortgageCalculationResolver.name);
    constructor(private readonly mortgageCalclationService: MortgageCalculationService) {}

    @Query(returns => CalculationResult )
    async calculateMortgage(@Args('inputData') inputData: MortgageDetailsInput): Promise<CalculationResult> {
        try{
            this.logger.log(`Calculation Mortgage ${JSON.stringify(inputData)}`);
            const calculation: CalculationResult = await this.mortgageCalclationService.calculateMortgae( inputData );

            this.logger.log('Calculated the result', calculation);
            return calculation;
        }catch (err) {
            this.logger.error(`unexpected error calculating the mortgage calculation`);
            throw err;
        }
    }

    @Query(returns => CalculationResult )
    async getDefaultCalculation(@Args('mortgageAmount') mortgageAmount: number): Promise<CalculationResult> {
        try{
            this.logger.log(`Calculating Default Mortgage ${mortgageAmount}`);
            const calculation: CalculationResult = await this.mortgageCalclationService.calculateDefaultMortgae( mortgageAmount );

            return calculation;
        }catch (err) {
            this.logger.error(`unexpected error calculating the mortgage calculation`);
            throw err;
        }
    }
}

