import { InterestRateService } from '@mortgage-calculator/calculator-service';
import { InterestRate, RateType } from '@mortgage-calculator/models';
import { Logger, Controller, Get, Param } from '@nestjs/common';

@Controller('interest-rate')
export class InterestRateController {
    private readonly logger = new Logger(InterestRateController.name);

    constructor(private readonly interestRateService: InterestRateService) {}

    @Get('types')
    async getRateTypes(): Promise<Array<any>> {
      this.logger.log(`Getting List of Rate Types`);
      try {
        const rateTypes = await this.interestRateService.getRateTypes();
  
        return rateTypes;
      } catch (err) {
        this.logger.error(`Unexpected error getting rate types ${err}`);
        throw err;
      }
    }

    @Get(':rateType')
    async getinterestRate(@Param('rateType') rateType: RateType): Promise<InterestRate> {
      this.logger.log(`Getting Interest Rate`);
      try {
        const interestRate:InterestRate = await this.interestRateService.getInterestRate(rateType);
  
        return interestRate;
      } catch (err) {
        this.logger.error(`Unexpected error getting rate types ${err}`);
        throw err;
      }
    }
}
