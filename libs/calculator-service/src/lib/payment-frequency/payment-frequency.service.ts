import { PaymentFrequency } from '@mortgage-calculator/models';
import { Logger, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentFrequencyService {
    private readonly logger = new Logger(PaymentFrequencyService.name);

   /**
   * The following function will return an array of Payment Frequency
   * @returns
   */
  public async getPaymentFrequency(): Promise<Array<PaymentFrequency>> {
    this.logger.log(`Start Getting Amortization Year`);

    const paymentFrequency: Array<PaymentFrequency> = [];

    paymentFrequency.push( {
        label: `Weekly`,
        weeks: 52
    });

    paymentFrequency.push( {
        label: `Accelerated Bi-Weekly`,
        weeks: 26
    });

    paymentFrequency.push( {
        label: `Semi-Monthly`,
        weeks: 24
    });

    paymentFrequency.push( {
        label: `Monthly`,
        weeks: 12
    });

    return Promise.resolve(paymentFrequency);
  }
}
