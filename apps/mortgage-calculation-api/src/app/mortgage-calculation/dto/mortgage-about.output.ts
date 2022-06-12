import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'about mortgage' })
export class MortgageAboutResult {

  @Field()
  version: string;
}