import { Module } from '@nestjs/common';

import { MortgageSummaryController } from './controllers/mortgage-summary.controller';
import { MortgageSummaryService } from './services/mortgage-summary.service';

@Module({
  imports: [],
  controllers: [MortgageSummaryController],
  providers: [MortgageSummaryService],
})
export class AppModule {}
