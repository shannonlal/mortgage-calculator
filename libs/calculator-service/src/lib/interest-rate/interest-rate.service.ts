import { InterestRate, RateType } from '@mortgage-calculator/models';
import { Logger, Injectable } from '@nestjs/common';

const INTEREST_RATE_MAX = 5;

@Injectable()
export class InterestRateService {
  private readonly logger = new Logger(InterestRateService.name);

  /**
   * The following function will return a an array of Rate Types
   * @returns
   */
  public async getRateTypes(): Promise<Array<any>> {
    this.logger.log(`Start Getting rate types`);
    const filterStrings = ( v => typeof v === 'string' && v!== '');
    
    const values: Array<any> = Object.values( RateType).filter( filterStrings );

    return Promise.resolve(values);
  }

    /**
   * The following function will return the current interest rate based on the type
   * @returns
   */
     public async getInterestRate( rateType: RateType): Promise<InterestRate> {
        this.logger.log(`Start Getting interest rate ${JSON.stringify( rateType)}`);
        
        const rndInt = (Math.random() * INTEREST_RATE_MAX ) + 1;

        const interestRate: InterestRate = {
            type: rateType,
            rate: parseFloat(rndInt.toFixed(2))
        }
    
        return Promise.resolve(interestRate);
      }
}
