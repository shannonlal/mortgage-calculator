import { MortgageResult } from '@mortgage-calculator/models';
import { Controller, Get, Param } from '@nestjs/common';

import { MortgageSummaryService } from '../services/mortgage-summary.service';

@Controller('mortgage-summary')
export class MortgageSummaryController {
  constructor(private readonly appService: MortgageSummaryService) {}

  @Get(':id')
  async getMortgageSummary( @Param('id') hashKey:string): Promise<MortgageResult> {
    return this.appService.getMortgageSummary( hashKey );
  }
}
