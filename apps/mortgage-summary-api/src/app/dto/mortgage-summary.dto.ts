import { MortgageRequest, MortgageResult } from "@mortgage-calculator/models";

export interface MortgageSummaryDto {
    mortgageResult: MortgageResult;
    mortgageRequest: MortgageRequest;
}

export interface MortgageSummaryResponseDto {
    hashResponse: string;
}