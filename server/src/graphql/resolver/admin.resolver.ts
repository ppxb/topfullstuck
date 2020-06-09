import { Query, Resolver } from '@nestjs/graphql'
import { AdminType } from '../types'

@Resolver(of => AdminType)
export class AdminResolver {
  @Query(returns => [String])
  async admins() {
    return ['libai', 'xiaole']
  }
}
