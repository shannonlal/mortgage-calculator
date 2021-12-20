import { Module } from '@nestjs/common'

import { TermController } from './controllers/term/term.controller'
import { CalculatorServiceModule } from '@mortgage-calculator/calculator-service'

@Module({
  imports: [CalculatorServiceModule],
  controllers: [TermController],
  providers: [],
})
export class AppModule {}
