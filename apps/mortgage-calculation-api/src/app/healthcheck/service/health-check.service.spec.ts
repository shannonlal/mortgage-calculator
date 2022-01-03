import { HealthStatus } from '@mortgage-calculator/models';
import { Test } from '@nestjs/testing';

import { HealthCheckService } from './health-check.service';

describe('HealthCheckService', () => {
  let service: HealthCheckService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HealthCheckService],
    }).compile();

    service = app.get<HealthCheckService>(HealthCheckService);
  });

  describe('getHealthStatus', () => {
    it('should get health status"', async() => {
      const status: HealthStatus = await service.getHealthStatus();
      expect(status).toBeDefined();
      expect( status.status).toBe(true);
    });
  });
});
