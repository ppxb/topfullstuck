import { Query, Resolver } from '@nestjs/graphql'
import { AdminType } from 'src/graphql/types'

@Resolver(of => AdminType)
export class AdminResolver {
  @Query(returns => [String])
  async admin() {
    return ['libai', 'xiaole']
  }
}
