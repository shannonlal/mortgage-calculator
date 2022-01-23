import { MortgageResult } from '@mortgage-calculator/models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MortgageSummaryService {
  async getMortgageSummary( hashKey: string ): Promise<MortgageResult> {

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
