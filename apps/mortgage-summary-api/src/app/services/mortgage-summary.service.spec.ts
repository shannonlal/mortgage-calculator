import { Test } from '@nestjs/testing';

import { MortgageSummaryService } from './mortgage-summary.service';

describe('MortgageSummaryService', () => {
  let service: MortgageSummaryService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [MortgageSummaryService],
    }).compile();

    service = app.get<MortgageSummaryService>(MortgageSummaryService);
  });

  describe('getMortgageSummary', () => {
    it('should return default mortgage summary', async () => {

      const rst = await service.getMortgageSummary('123112312');
      expect( rst ).toBeDefined();

      expect( rst.id ).toBe('');
    });
  });
});
