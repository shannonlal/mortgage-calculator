import { Logger } from '@nestjs/common';
import { Args, Mutation, Resolver, Query} from '@nestjs/graphql';
import { CalculationResult } from '../dto/calculation-result.output';
import { MortgageCalculationService } from '../services/mortgage-calculation.service';
import { MortgageDetailsInput } from '../dto/mortgage-details.input';


@Resolver(of => CalculationResult)
export class MortgageCalculationResolver {
    private readonly logger = new Logger(MortgageCalculationService.name);
    constructor(private readonly mortgageCalclationService: MortgageCalculationService) {}

    @Mutation(returns => CalculationResult )
    async calculateMortgage(@Args('inputData') inputData: MortgageDetailsInput): Promise<CalculationResult> {
        try{
            const calculation: CalculationResult = await this.mortgageCalclationService.calculateDefaultMortgae( inputData.mortgageAmount );

            return calculation;
        }catch (err) {
            this.logger.error(`unexpected error calculating the mortgage calculation`);
            throw err;
        }
    }

    @Query(returns => CalculationResult )
    async getDefaultCalculation(@Args('inputData') mortgageAmount: number): Promise<CalculationResult> {
        try{
            const calculation: CalculationResult = await this.mortgageCalclationService.calculateDefaultMortgae( mortgageAmount );

            return calculation;
        }catch (err) {
            this.logger.error(`unexpected error calculating the mortgage calculation`);
            throw err;
        }
    }
}

