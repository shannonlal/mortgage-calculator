import { Module } from '@nestjs/common';
import { TermService } from './term/term.service';
import { InterestRateService } from './interest-rate/interest-rate.service';
import { AmortizationService } from './amortization/amortization.service';

@Module({
  controllers: [],
  providers: [TermService, InterestRateService, AmortizationService],
  exports: [TermService, InterestRateService, AmortizationService],
})
export class CalculatorServiceModule {}
