import { MortgageSummaryDto, MortgageSummaryResponseDto } from './mortgage-summary.dto';

describe('MortgageSummaryDto', () => {
  it('should validate interface MortgageSummaryDto', () => {
    const mortgageSummaryDto: MortgageSummaryDto = {
        mortgageRequest : {
            brokerName :'J. Smith',
            clientName : 'Bob Name',
            createDate : new Date()
        },
        mortgageResult: {
            monthlyPayment: 1231123.01,
            id: "1231233213",
            creationDate: new Date().toISOString(),
            mortgageAmountPerMonth: 100000,
            termPrincipleAmount: 1300,
            termInterestAmount: 6000,
            totalInterestInPeriod: 300,
            totalAmountInPeriod: 98723
        }
    };
    expect(mortgageSummaryDto).toBeDefined();

  });
});

describe('MortgageSummaryResponseDto', () => {
  it('should validate interface MortgageSummaryResponseDto', () => {
    
    const responseDto: MortgageSummaryResponseDto = {
      hashResponse: 'AFEA!@#!@#!AFAEAFFE'
    }

    expect(responseDto).toBeDefined();
    expect(responseDto.hashResponse).toBe('AFEA!@#!@#!AFAEAFFE');

  });
});
