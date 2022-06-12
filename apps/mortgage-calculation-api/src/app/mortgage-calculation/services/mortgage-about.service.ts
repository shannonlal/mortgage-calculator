import { Injectable, Logger } from '@nestjs/common';
import { MortgageAbout } from '@mortgage-calculator/models';
import { MortgageAboutDto } from '../dto/mortgage.about.dto';

const MORTGAGE_VERSION = process.env.MORTGAGE_VERSION || '1.0';

@Injectable()
export class MortgageAboutService {
    private readonly logger = new Logger(MortgageAboutService.name);

    /**
     * The following function will get the mortgage version
     * @returns 
     */
    async getVersion(): Promise<MortgageAboutDto> {
        try{
            this.logger.log(`Getting the mortgage version`);
            const about: MortgageAbout = {
                version : MORTGAGE_VERSION
            };
            const aboutMortgage: MortgageAboutDto = {
                about
            };
            return Promise.resolve( aboutMortgage );
        }catch( err ){
            this.logger.error(`Unexpected error getting mortgage version ${err}`);
            throw err;
        }
    }

}