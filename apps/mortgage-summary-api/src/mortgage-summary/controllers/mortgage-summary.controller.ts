import { MortgageResult } from '@mortgage-calculator/models';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MortgageSummaryDto } from '../dto/mortgage-summary.dto';

import { MortgageSummaryService } from '../services/mortgage-summary.service';

@Controller('mortgage-summary')
export class MortgageSummaryController {
  constructor(private readonly appService: MortgageSummaryService) {}

  @Get(':id')
  async getMortgageSummary( @Param('id') hashKey:string): Promise<MortgageResult> {
    return this.appService.getMortgageSummary( hashKey );
  }

  @Post()
  async createMortgageSummary( @Body() dto:MortgageSummaryDto): Promise<MortgageResult> {
    return this.appService.getMortgageSummary( undefined );
  }

  @Delete(':id')
  async deleteMortgageSummary( @Param('id') hashKey:string): Promise<MortgageResult> {
    return this.appService.getMortgageSummary( undefined );
  }
}
