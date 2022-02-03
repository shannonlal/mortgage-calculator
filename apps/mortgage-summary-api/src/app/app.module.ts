import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthCheckController } from './controllers/healthcheck.controller';
import { HealthCheckService } from './services/health-check.service';
import { MortgageSummaryModule } from '../mortgage-summary/mortgage-summary.module'

//mongodb://127.0.0.1:50285,127.0.0.1:50286,127.0.0.1:50287,127.0.0.1:50288/mortgage_calculation?replicaSet=testset
const MONGO_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:50285,127.0.0.1:50286,127.0.0.1:50287,127.0.0.1:50288/mortgage_calculation?replicaSet=testset';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL),
    MortgageSummaryModule
  ],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
