import { Module } from '@nestjs/common';
import { MortgageCalculationResolver } from './resolvers/mortgage-calculation.resolver';
import { MortgageCalculationService } from './services/mortgage-calculation.service';
import { MortgageAboutService } from './services/mortgage-about.service';

@Module({
  providers: [
    MortgageCalculationResolver, 
    MortgageCalculationService,
    MortgageAboutService 
  ],
})
export class MortgageCalculationModule {}