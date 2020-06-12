import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AdminModule } from '../admin/admin.module'
import { DatabaseModule } from '../database/database.module'
import { RecipeModule } from '../recipes/recipes.moudel'

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    DatabaseModule,
    RecipeModule,
    AdminModule
  ]
})
export class GraphQLAppModule {}
