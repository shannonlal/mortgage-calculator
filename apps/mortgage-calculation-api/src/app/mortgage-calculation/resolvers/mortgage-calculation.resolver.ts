import { Logger } from '@nestjs/common';
import { Args, Query, Resolver} from '@nestjs/graphql';
import { CalculationResult } from '../models/calculation-result.model';
import { MortgageCalculationService } from '../services/mortgage-calculation.service';
import { MortgageDetailsInput } from '../dto/mortgage-details.input';


@Resolver(of => CalculationResult)
export class MortgageCalculationResolver {
    private readonly logger = new Logger(MortgageCalculationService.name);
    constructor(private readonly mortgageCalclationService: MortgageCalculationService) {}

    @Query(returns => CalculationResult )
    async calculateMortgage(@Args('inputData') inputData: MortgageDetailsInput): Promise<CalculationResult> {
        try{
            const calculation: CalculationResult = await this.mortgageCalclationService.calculateMortgae( inputData );

            return calculation;
        }catch (err) {
            this.logger.error(`unexpected error calculating the mortgage calculation`);
            throw err;
        }

    }
}