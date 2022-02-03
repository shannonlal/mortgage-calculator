import { Model } from 'mongoose';
import { MortgageResult } from '@mortgage-calculator/models';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { MortgageSummary, MortgageSummaryDocument} from '../schemas/mortgage-summary.schema'
import { MortgageSummaryDto } from '../dto/mortgage-summary.dto';

@Injectable()
export class MortgageSummaryService {
  private readonly logger = new Logger(MortgageSummaryService.name);

  constructor( @InjectModel(MortgageSummary.name) private mortgageSummaryModel: Model<MortgageSummaryDocument>){}

  /**
   * 
   * @param hashKey 
   * @returns 
   */
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

  /**
   * 
   * @param mortgageSummary 
   */
async createMortgageSummary( dto: MortgageSummaryDto) : Promise<MortgageSummary> {

  const summary: MortgageSummary = {
 
    id: 'XADSFAS'+ Math.random(),
    monthlyPayment: dto.mortgageResult.monthlyPayment,
    creationDate: new Date(),
    mortgageAmountPerMonth: dto.mortgageResult.mortgageAmountPerMonth,
    termPrincipleAmount: dto.mortgageResult.termPrincipleAmount,
    termInterestAmount: dto.mortgageResult.termInterestAmount,
    totalInterestInPeriod: dto.mortgageResult.totalInterestInPeriod,
    brokerName: dto.mortgageRequest.brokerName,
    clientName: dto.mortgageRequest.clientName,
    createDate: new Date()
  }

  const mortgageSummary = new this.mortgageSummaryModel( summary );

  return mortgageSummary.save();


}
}
