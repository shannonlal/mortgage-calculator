import { Controller, Get, Logger } from '@nestjs/common';
import { HealthStatus  } from '@mortgage-calculator/models';
const STATUS_ID = process.env.HEALTH_ID|| '4';

@Controller('health-check')
export class HealthCheckController {
    private readonly logger = new Logger(HealthCheckController.name);

    @Get()
    async getHealthStatus(): Promise<HealthStatus> {
      this.logger.log(`Getting List of Terms`);
      try {

        const status: HealthStatus = {
            status:true,
            statusId: STATUS_ID 
        };
        const statusResponse: Promise<HealthStatus> = Promise.resolve( status );
  
        return statusResponse;
      } catch (err) {
        console.log(`Error.  Change don't swallow error`);
        throw err;
      }
    }
}
