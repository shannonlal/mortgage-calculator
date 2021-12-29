import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from './health-check.controller';

describe('HealthCheckController', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
    }).compile();

    controller = module.get<HealthCheckController>(HealthCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get health check', async () => {
    try{
      const healthCheck = await controller.getHealthStatus();
      expect( healthCheck ).toBeDefined();
      expect( healthCheck.statusId ).toBe( '4' );
    } catch (err){
      expect( err ).toBeUndefined();
    }
  });
});
