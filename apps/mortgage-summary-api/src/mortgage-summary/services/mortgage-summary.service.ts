import { MortgageResult } from '@mortgage-calculator/models';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MortgageSummaryService {
  private readonly logger = new Logger(MortgageSummaryService.name);
  async getMortgageSummary( hashKey: string ): Promise<MortgageResult> {

    this.logger.log(`Getting the Mortgage Summary ${hashKey}`);

    const mortgageSummary: MortgageResult = {
      id: '',
      monthlyPayment: 0,
      creationDate: '',
      mortgageAmountPerMonth: 0,
      termPrincipleAmount: 0,
      termInterestAmount: 0,
      totalInterestInPeriod: 0,
      totalAmountInPeriod: 0
    };
    return mortgageSummary;
  }
}
