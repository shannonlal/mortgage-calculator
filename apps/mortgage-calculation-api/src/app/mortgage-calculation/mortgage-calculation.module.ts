import { Module } from '@nestjs/common';
import { MortgageCalculationResolver } from './resolvers/mortgage-calculation.resolver';
import { MortgageCalculationService } from './services/mortgage-calculation.service';

@Module({
  providers: [
    MortgageCalculationResolver, 
    MortgageCalculationService 
  ],
})
export class MortgageCalculationModule {}