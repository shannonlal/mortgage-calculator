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

  describe('getData', () => {
    it('should return "Welcome to mortgage-summary-api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to mortgage-summary-api!' });
    });
  });
});
