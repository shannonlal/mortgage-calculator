import { Injectable } from '@nestjs/common';

@Injectable()
export class MortgageSummaryService {
  getData(): { message: string } {
    return { message: 'Welcome to mortgage-summary-api!' };
  }
}
