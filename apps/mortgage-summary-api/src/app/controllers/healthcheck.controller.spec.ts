import { Test, TestingModule } from '@nestjs/testing';

import { HealthCheckController } from './healthcheck.controller';
import { HealthCheckService } from '../services/health-check.service';
import { HealthStatus } from '@mortgage-calculator/models';

describe('HealthCheckController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile();
  });

  describe('getData', () => {
    it('should check health status', async () => {
      const appController = app.get<HealthCheckController>(HealthCheckController);
      const healthStatus: HealthStatus = await appController.getHealthStatus();
      expect( healthStatus ).toBeDefined();
      expect( healthStatus.status ).toBe( true );
    });
  });
});
