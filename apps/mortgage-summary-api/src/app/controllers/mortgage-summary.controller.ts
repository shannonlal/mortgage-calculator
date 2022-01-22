import { Controller, Get } from '@nestjs/common';

import { MortgageSummaryService } from '../services/mortgage-summary.service';

@Controller()
export class MortgageSummaryController {
  constructor(private readonly appService: MortgageSummaryService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
