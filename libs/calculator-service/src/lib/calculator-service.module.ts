import { Module } from '@nestjs/common';
import { TermService } from './term/term.service';

@Module({
  controllers: [],
  providers: [],
  exports: [ TermService ],
})
export class CalculatorServiceModule {}
