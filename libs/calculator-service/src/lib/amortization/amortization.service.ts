import { AmortizationMonth, AmortizationYear } from '@mortgage-calculator/models';
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
                value: year,
            }
        } else {
            aYears = {
                label: `${year} Years`,
                value: year,
            }
        }

        amortizationYears.push( aYears );
    }

    return Promise.resolve(amortizationYears);
  }

     /**
   * The following function will return an array of Amortization Months
   * @returns
   */
      public async getAmortizationMonths(): Promise<Array<AmortizationMonth>> {
        this.logger.log(`Start Getting Amortization Months`);
    
        const amortizationMonth: Array<AmortizationMonth> = [];
        for( let i = 0; i < MAX_AMORTIZATION_MONTHS; i++ ){
            let aMonth;
            const month = i+1;
            if( i === 0){
                aMonth = {
                    label: `${month} Month`,
                    value: month,
                }
            } else {
                aMonth = {
                    label: `${month} Months`,
                    value: month,
                }
            }
    
            amortizationMonth.push( aMonth );
        }
    
        return Promise.resolve(amortizationMonth);
      }
}
