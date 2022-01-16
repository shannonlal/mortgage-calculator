import { Injectable, Logger } from '@nestjs/common';
import { CalculationResult } from '../dto/calculation-result.output';
import { MortgageDetailsInput } from '../dto/mortgage-details.input';
import { getMortgageAmountPerMonth, getMortgageAmountYear, getPeriodInstallmentAmount, getPeriodInsterestPerYear, getPeriodInterestPerMonth, getTermInterestAmount, getTermPrincipleAmount, getTotalPeriodInterest } from './mortgage-calculation.delegate';

@Injectable()
export class MortgageCalculationService {
    private readonly logger = new Logger(MortgageCalculationService.name);

    /**
     * The following function will calculate the monthly payment based on the mortgage 
     * parameters that were provided
     * @param inputData 
     * @returns 
     */
    async calculateMortgae(mortgageDetails: MortgageDetailsInput): Promise<CalculationResult> {
        try{
            this.logger.log(`Calculating the mortgage amount ${JSON.stringify(mortgageDetails)}`);

            const totalInterestInPeriod = getTotalPeriodInterest( 
                mortgageDetails.mortgageAmount, 
                mortgageDetails.prepaymentAmount, 
                mortgageDetails.interestRate, 
                mortgageDetails.amortizationYear);

            const mortgageAmountPerYear = getMortgageAmountYear( 
                mortgageDetails.mortgageAmount, 
                mortgageDetails.prepaymentAmount,
                mortgageDetails.amortizationYear,
                mortgageDetails.interestRate );

            const mortgageAmountPerMonth = getMortgageAmountPerMonth( mortgageAmountPerYear, mortgageDetails.paymentFrequency );

            const termPrincipleAmount = getTermPrincipleAmount( mortgageAmountPerYear, mortgageDetails.term );

            const periodInterestPerYear = getPeriodInsterestPerYear( totalInterestInPeriod, mortgageDetails.amortizationYear);
            const termInterestAmount = getTermInterestAmount(periodInterestPerYear, mortgageDetails.term);
            const periodInsterestPerMonth = getPeriodInterestPerMonth( periodInterestPerYear, mortgageDetails.paymentFrequency);

            const totalAmountInPeriod = getPeriodInstallmentAmount( mortgageAmountPerMonth, periodInsterestPerMonth );
            
            const calculation: CalculationResult = {
                id: `1231233213`,
                monthlyPayment: 1212.31,
                creationDate: new Date().toISOString(),
                mortgageAmountPerMonth,
                termPrincipleAmount,
                termInterestAmount,
                totalInterestInPeriod,
                totalAmountInPeriod
            }
            return Promise.resolve( calculation );
        }catch( err ){
            this.logger.error(`Unexpected error calculating mortgage ${err}`);
            throw err;
        }
    }


    /**
     * The following function will calculate the monthly payment based on the mortgage 
     * amount only
     * @param mortgageAmount 
     * @returns 
     */
     async calculateDefaultMortgae(mortgageAmount: number): Promise<CalculationResult> {
        try{
            this.logger.log(`Calculating the mortgage amount ${mortgageAmount}`);

            const calculation: CalculationResult = {
                id: `1231233213`,
                monthlyPayment: 1212.31,
                creationDate: new Date().toISOString(),
                mortgageAmountPerMonth: 1212.31,
                termPrincipleAmount: 10000,
                termInterestAmount: 3000,
                totalInterestInPeriod: 400,
                totalAmountInPeriod: 3000
            }
            return Promise.resolve( calculation );
        }catch( err ){
            this.logger.error(`Unexpected error calculating mortgage ${err}`);
            throw err;
        }
    }
}