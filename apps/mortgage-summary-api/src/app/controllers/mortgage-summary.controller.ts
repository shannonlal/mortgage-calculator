import { MortgageResult } from '@mortgage-calculator/models';
import { Controller, Get } from '@nestjs/common';

import { MortgageSummaryService } from '../services/mortgage-summary.service';

@Controller('mortgage-summary')
export class MortgageSummaryController {
  constructor(private readonly appService: MortgageSummaryService) {}

  @Get()
  async getMortgageSummary( hashKey: string): Promise<MortgageResult> {
    return this.appService.getMortgageSummary( hashKey );
  }
}
