import { Module } from '@nestjs/common';

import { HealthCheckController } from './healthcheck/controller/healthcheck.controller';
import { HealthCheckService } from './healthcheck/service/health-check.service';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class AppModule {}
