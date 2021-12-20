import { Module } from '@nestjs/common';
import { TermService } from './term/term.service';
import { InterestRateService } from './interest-rate/interest-rate.service';

@Module({
  controllers: [],
  providers: [TermService, InterestRateService],
  exports: [TermService, InterestRateService],
})
export class CalculatorServiceModule {}
