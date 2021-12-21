import { AmortizationService } from '@mortgage-calculator/calculator-service';
import { AmortizationMonth, AmortizationPeriod, AmortizationYear } from '@mortgage-calculator/models';
import { Logger, Controller, Get } from '@nestjs/common';

@Controller('amortization')
export class AmortizationController {
    private readonly logger = new Logger(AmortizationController.name);

    constructor(private readonly amortizationService: AmortizationService) {}

    @Get()
    async getAmorizationPeriod(): Promise<AmortizationPeriod> {
      this.logger.log(`Getting Amorization Period`);
      try {
        const years: AmortizationYear[] = await this.amortizationService.getAmortizationYears();
        const months: AmortizationMonth[] = await this.amortizationService.getAmortizationMonths();
  
        const amortizationPeriod: AmortizationPeriod = {
            months,
            years
        };
        return amortizationPeriod;
      } catch (err) {
        this.logger.error(`Unexpected error getting amorization period ${err}`);
        throw err;
      }
    }
}
