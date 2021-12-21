import { Module } from '@nestjs/common';

import { TermController } from './controllers/term/term.controller';
import { CalculatorServiceModule } from '@mortgage-calculator/calculator-service';
import { InterestRateController } from './controllers/interest-rate/interest-rate.controller';

@Module({
  imports: [CalculatorServiceModule],
  controllers: [TermController, InterestRateController],
  providers: [],
})
export class AppModule {}
