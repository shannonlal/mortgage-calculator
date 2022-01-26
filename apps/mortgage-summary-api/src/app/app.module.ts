import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MortgageSummaryController } from './controllers/mortgage-summary.controller';
import { MortgageSummaryService } from './services/mortgage-summary.service';

const MONGO_URL = process.env.MONGODB_URL || 'mongodb://localhost/mortgage-summary';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URL)],
  controllers: [MortgageSummaryController],
  providers: [MortgageSummaryService],
})
export class AppModule {}
