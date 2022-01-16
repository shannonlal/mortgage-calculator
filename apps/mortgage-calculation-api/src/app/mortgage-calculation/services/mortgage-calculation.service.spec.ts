import { Test, TestingModule } from '@nestjs/testing';
import { MortgageCalculationService } from './mortgage-calculation.service';
import { Term } from '@mortgage-calculator/models';
import { MortgageDetailsInput } from '../dto/mortgage-details.input';
import { CalculationResult } from '../dto/calculation-result.output';

describe('MortgageCalculationService', () => {
  let service: MortgageCalculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MortgageCalculationService],
    }).compile();

    service = module.get<MortgageCalculationService>(MortgageCalculationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate mortgage', async () => {
    try {
      const mortgageDetails: MortgageDetailsInput = {
        mortgageAmount:100000,
        prepaymentAmount:10000,
        interestRate:2,
        amortizationYear:5,
        amortizationMonth:2,
        interestRateType:"FIXED",
        paymentFrequency:52,
        term:5
      }
      const result: CalculationResult = await service.calculateMortgae( mortgageDetails );

      expect(result).toBeDefined();
      expect(result.totalAmountInPeriod).toBe(367.46);
      expect(result.totalInterestInPeriod).toBe(9000);
      expect(result.termPrincipleAmount).toBe(86538.45);
    } catch (err) {
      expect(err).toBeUndefined();
    }
  });


});
