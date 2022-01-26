import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MortgageSummary, MortgageSummarySchema } from './schemas/mortgage-summary.schema'

@Module({

    imports: [
      MongooseModule.forFeature([{ name: MortgageSummary.name, schema: MortgageSummarySchema }]),
    ],
  })
export class MortgageSummaryModule {}
