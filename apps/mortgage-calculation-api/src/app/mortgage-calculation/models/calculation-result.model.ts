import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'calculation result' })
export class CalculationResult {
  @Field(type => ID)
  id: string;

  @Field()
  monthlyPayment: number;

  @Field()
  creationDate: Date;

}