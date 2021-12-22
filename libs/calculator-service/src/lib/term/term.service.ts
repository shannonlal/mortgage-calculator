import { Logger, Injectable } from '@nestjs/common';
import { Term } from '@mortgage-calculator/models';

// TODO: Have Term duration be configurable and passed in as env
const TERM_DURATION = 30;
@Injectable()
export class TermService {
  private readonly logger = new Logger(TermService.name);

  /**
   * The following function will return a an array of Terms
   * @returns
   */
  public async getTerms(): Promise<Array<Term>> {
    this.logger.log(`Start Getting terms`);
    const terms: Array<Term> = [];
    for (let i = 0; i < TERM_DURATION; i++) {
      const duration = i + 1;
      let label = `${duration} Years`;

      // Special condition for first year
      if (i === 0) {
        label = `${duration} Year`;
      }
      terms[i] = {
        label,
        value:duration,
      };
    }
    this.logger.log(`Completed Getting terms`);
    return Promise.resolve(terms);
  }
}
