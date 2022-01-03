import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HealthCheckController } from './healthcheck/controller/healthcheck.controller';
import { HealthCheckService } from './healthcheck/service/health-check.service';
import { MortgageCalculationModule} from './mortgage-calculation/mortgage-calculation.module'

@Module({
  imports: [
    MortgageCalculationModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    })
  ]
})
export class AppModule {}
