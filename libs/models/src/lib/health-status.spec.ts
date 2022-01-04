import { HealthStatus } from './health-status';

describe('Selectable', () => {
  it('should validate interface Selectable', () => {
    const healthStatus: HealthStatus = {
        status: true,
        statusId: '44'
    };
    expect(healthStatus).toBeDefined();
    expect(healthStatus.status).toBe(true);
    expect(healthStatus.statusId).toBe('44');
  });
});
