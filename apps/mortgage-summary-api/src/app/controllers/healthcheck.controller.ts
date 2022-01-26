import { HealthStatus } from '@mortgage-calculator/models';
import { Controller, Get, Logger } from '@nestjs/common';

import { HealthCheckService } from '../services/health-check.service';

@Controller('health-check')
export class HealthCheckController {
  private readonly logger = new Logger(HealthCheckController.name);
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  async getHealthStatus(): Promise<HealthStatus> {
    return this.healthCheckService.getHealthStatus();
  }
}
