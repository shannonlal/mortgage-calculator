import { InterestRateService } from '@mortgage-calculator/calculator-service';
import { Logger, Controller, Get } from '@nestjs/common';

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
}
