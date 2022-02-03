import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MortgageSummary, MortgageSummarySchema } from './schemas/mortgage-summary.schema';
import { MortgageSummaryService } from './services/mortgage-summary.service';
import { MortgageSummaryController} from './controllers/mortgage-summary.controller';

@Module({
  providers: [MortgageSummaryService],
  controllers: [MortgageSummaryController],
  imports: [
    MongooseModule.forFeature([{ name: MortgageSummary.name, schema: MortgageSummarySchema }]),
  ],
  })
export class MortgageSummaryModule {}
