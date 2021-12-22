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
        value: 52
    });

    paymentFrequency.push( {
        label: `Accelerated Bi-Weekly`,
        value: 26
    });

    paymentFrequency.push( {
        label: `Semi-Monthly`,
        value: 24
    });

    paymentFrequency.push( {
        label: `Monthly`,
        value: 12
    });

    return Promise.resolve(paymentFrequency);
  }
}
