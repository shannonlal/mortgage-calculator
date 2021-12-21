import { PaymentFrequencyService } from '@mortgage-calculator/calculator-service';
import { PaymentFrequency } from '@mortgage-calculator/models';
import { Logger, Controller, Get } from '@nestjs/common';

@Controller('payment-frequency')
export class PaymentFrequencyController {
    private readonly logger = new Logger(PaymentFrequencyController.name);

    constructor(private readonly paymentFrequencyService: PaymentFrequencyService) {}

    @Get()
    async getPaymentFrequency(): Promise<Array<PaymentFrequency>> {
      this.logger.log(`Getting List of Payment Frequency`);
      try {
        const paymentFrequency = await this.paymentFrequencyService.getPaymentFrequency();
  
        return paymentFrequency;
      } catch (err) {
        this.logger.error(`Unexpected error getting payment frequency ${err}`);
        throw err;
      }
    }
}
