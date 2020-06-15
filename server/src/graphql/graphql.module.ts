import { Global, Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { JwtModule } from '@nestjs/jwt'
import { CourseModule } from 'src/courses/courses.module'
import { AdminModule } from '../admin/admin.module'
import { DatabaseModule } from '../database/database.module'
import { RecipeModule } from '../recipes/recipes.moudel'

@Global()
@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    DatabaseModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: process.env.AUTH_TOKEN_SECRET
        }
      }
    }),
    RecipeModule,
    AdminModule,
    CourseModule
  ],
  exports: [JwtModule]
})
export class GraphQLAppModule {}
