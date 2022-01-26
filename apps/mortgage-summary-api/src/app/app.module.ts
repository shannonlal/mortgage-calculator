import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HealthCheckController } from './controllers/healthcheck.controller';
import { HealthCheckService } from './services/health-check.service'
const MONGO_URL = process.env.MONGODB_URL || 'mongodb://localhost/mortgage-summary';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URL)],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
