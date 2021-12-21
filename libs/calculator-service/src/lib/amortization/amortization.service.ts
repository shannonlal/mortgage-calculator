import { AmortizationYear } from '@mortgage-calculator/models';
import { Logger, Injectable } from '@nestjs/common';

const MAX_AMORTIZATION_YEARS = 30;
const MAX_AMORTIZATION_MONTHS = 12;

@Injectable()
export class AmortizationService {
    private readonly logger = new Logger(AmortizationService.name);

   /**
   * The following function will return an array of Amortization Years
   * @returns
   */
  public async getAmortizationYears(): Promise<Array<AmortizationYear>> {
    this.logger.log(`Start Getting Amortization Year`);

    const amortizationYears: Array<AmortizationYear> = [];
    for( let i = 0; i < MAX_AMORTIZATION_YEARS; i++ ){
        let aYears;
        const year = i+1;
        if( i === 0){
            aYears = {
                label: `${year} Year`,
                year,
            }
        } else {
            aYears = {
                label: `${year} Years`,
                year,
            }
        }

        amortizationYears.push( aYears );
    }

    return Promise.resolve(amortizationYears);
  }
}
