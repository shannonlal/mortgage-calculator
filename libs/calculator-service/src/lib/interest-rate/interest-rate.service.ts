import { RateType } from '@mortgage-calculator/models';
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class InterestRateService {
  private readonly logger = new Logger(InterestRateService.name);

  /**
   * The following function will return a an array of Terms
   * @returns
   */
  public async getRateTypes(): Promise<Array<any>> {
    this.logger.log(`Start Getting rate types`);
    const filterStrings = ( v => typeof v === 'string' && v!== '');
    
    const values: Array<any> = Object.values( RateType).filter( filterStrings );
    
    return Promise.resolve(values);
  }
}
