import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TermController } from './controllers/term/term.controller';
import { CalculatorServiceModule } from '@mortgage-calculator/calculator-service';

@Module({
  imports: [ CalculatorServiceModule ],
  controllers: [AppController, TermController],
  providers: [AppService],
})
export class AppModule {}
