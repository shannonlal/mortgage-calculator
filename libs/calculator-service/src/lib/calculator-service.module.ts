import { Module } from '@nestjs/common';
import { TermService } from './term/term.service';

@Module({
  controllers: [],
  providers: [ TermService ],
  exports: [ TermService ],
})
export class CalculatorServiceModule {}
