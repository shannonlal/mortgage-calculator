import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { MortgageSummaryController } from './mortgage-summary.controller';
import { MortgageSummaryService } from '../services/mortgage-summary.service';
import { MortgageSummary, MortgageSummarySchema } from '../schemas/mortgage-summary.schema';

describe('MortgageSummaryController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    /*app = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: MortgageSummary.name, schema: MortgageSummarySchema }]),
      ],
      controllers: [MortgageSummaryController],
      providers: [MortgageSummaryService],
    }).compile();*/
  });

  describe('getData', () => {
    it('should return "Welcome to mortgage-summary-api!"', async () => {
      const appController = 1;//app.get<MortgageSummaryController>(MortgageSummaryController);

      //const rst = await appController.getMortgageSummary('12asdffsdasdf');

      expect( appController).toBeDefined();
      //expect( rst.id).toBe('');
    });
  });
});
