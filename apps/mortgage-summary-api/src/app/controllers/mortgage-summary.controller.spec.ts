import { Test, TestingModule } from '@nestjs/testing';

import { MortgageSummaryController } from './mortgage-summary.controller';
import { MortgageSummaryService } from '../services/mortgage-summary.service';

describe('MortgageSummaryController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [MortgageSummaryController],
      providers: [MortgageSummaryService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to mortgage-summary-api!"', async () => {
      const appController = app.get<MortgageSummaryController>(MortgageSummaryController);

      const rst = await appController.getMortgageSummary('12asdffsdasdf');

      expect( rst).toBeDefined();
      expect( rst.id).toBe('');
    });
  });
});
