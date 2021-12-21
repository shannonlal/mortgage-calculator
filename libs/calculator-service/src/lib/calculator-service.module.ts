import { Module } from '@nestjs/common';
import { TermService } from './term/term.service';
import { InterestRateService } from './interest-rate/interest-rate.service';
import { AmortizationService } from './amortization/amortization.service';
import { PaymentFrequencyService } from './payment-frequency/payment-frequency.service';

@Module({
  controllers: [],
  providers: [TermService, InterestRateService, AmortizationService, PaymentFrequencyService],
  exports: [TermService, InterestRateService, AmortizationService, PaymentFrequencyService],
})
export class CalculatorServiceModule {}
