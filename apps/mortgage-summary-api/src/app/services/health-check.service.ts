import { Get, Injectable, Logger } from '@nestjs/common';
import { HealthStatus  } from '@mortgage-calculator/models';
const STATUS_ID = process.env.HEALTH_ID|| '4';

@Injectable()
export class HealthCheckService {
  private readonly logger = new Logger(HealthCheckService.name);

  @Get()
  async getHealthStatus(): Promise<HealthStatus> {
    this.logger.log(`Getting Mortgage Calcualtion Health Status`);
    try {

      const status: HealthStatus = {
          status:true,
          statusId: STATUS_ID 
      };
      const statusResponse: Promise<HealthStatus> = Promise.resolve( status );

      return statusResponse;
    } catch (err) {
      this.logger.error(`Error.  Change don't swallow error`);
      throw err;
    }
  }
}
