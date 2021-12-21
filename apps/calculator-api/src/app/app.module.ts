import { Module } from '@nestjs/common';

import { TermController } from './controllers/term/term.controller';
import { CalculatorServiceModule } from '@mortgage-calculator/calculator-service';
import { InterestRateController } from './controllers/interest-rate/interest-rate.controller';
import { AmortizationController } from './controllers/amortization/amortization.controller';
import { PaymentFrequencyController } from './controllers/payment-frequency/payment-frequency.controller';

@Module({
  imports: [CalculatorServiceModule],
  controllers: [TermController, InterestRateController, AmortizationController, PaymentFrequencyController],
  providers: [],
})
export class AppModule {}
