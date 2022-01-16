import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'calculation result' })
export class CalculationResult {
  @Field(type => ID)
  id: string;

  @Field()
  monthlyPayment: number;

  @Field()
  creationDate: string;

  @Field()
  mortgageAmountPerMonth: number;

  @Field()
  termPrincipleAmount: number;

  @Field()
  termInterestAmount: number;

  @Field()
  totalInterestInPeriod: number;

  @Field()
  totalAmountInPeriod: number;

}