import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthCheckController } from './controllers/healthcheck.controller';
import { HealthCheckService } from './services/health-check.service';
import { MortgageSummaryModule } from '../mortgage-summary/mortgage-summary.module'

const MONGO_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:58097';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL),
    MortgageSummaryModule
  ],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
