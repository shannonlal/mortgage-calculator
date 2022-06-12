import { Logger } from '@nestjs/common';
import { Resolver, Query} from '@nestjs/graphql';
import { MortgageAboutResult } from '../dto/mortgage-about.output';
import { MortgageAboutDto } from '../dto/mortgage.about.dto';
import { MortgageAboutService } from '../services/mortgage-about.service';


@Resolver(of => MortgageAboutResult)
export class MortgageAboutResolver {
    private readonly logger = new Logger(MortgageAboutResult.name);
    constructor(private readonly mortgageAboutService: MortgageAboutService) {}

    @Query(returns => MortgageAboutResult )
    async getMortgageVersion(): Promise<MortgageAboutResult> {
        try{
            this.logger.log(`Get About Mortgage `);
            const aboutMortgage: MortgageAboutDto = await this.mortgageAboutService.getVersion();

            this.logger.log('Got Mortgage About', aboutMortgage);
            return {
                version: aboutMortgage.about.version
            };
        }catch (err) {
            this.logger.error(`unexpected error getting about mortgage`);
            throw err;
        }
    }

}

