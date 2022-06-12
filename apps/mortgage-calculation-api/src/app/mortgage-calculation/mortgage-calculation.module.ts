import { Module } from '@nestjs/common';
import { MortgageCalculationResolver } from './resolvers/mortgage-calculation.resolver';
import { MortgageCalculationService } from './services/mortgage-calculation.service';
import { MortgageAboutService } from './services/mortgage-about.service';
import { MortgageAboutResolver } from './resolvers/mortgage-about.resolver';

@Module({
  providers: [
    MortgageCalculationResolver, 
    MortgageCalculationService,
    MortgageAboutResolver,
    MortgageAboutService 
  ],
})
export class MortgageCalculationModule {}