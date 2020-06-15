import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CourseType {
  @Field(type => ID)
  _id: string

  @Field()
  name: string

  @Field()
  author: string

  @Field()
  vip: boolean

  @Field(type => [String])
  tags: string[]

  @Field()
  cover: string

  @Field(type => [String])
  episodes?: string[]
}
