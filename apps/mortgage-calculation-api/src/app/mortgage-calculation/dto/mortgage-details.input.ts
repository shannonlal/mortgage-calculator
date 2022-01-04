import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MortgageDetailsInput {
    @Field()
    mortgageAmount: number;

    @Field()
    prepaymentAmount: number;

    @Field()
    interestRate: number;

    @Field()
    amortizationYear: number;

    @Field()
    amortizationMonth: number;

    @Field()
    interestRateType: string;

    @Field()
    paymentFrequency: number;

    @Field()
    term: number;
};