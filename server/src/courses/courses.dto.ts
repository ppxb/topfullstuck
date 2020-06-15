import { ArgsType, Field, InputType, Int } from '@nestjs/graphql'
import { Max, Min } from 'class-validator'

@InputType()
export class NewCourseInput {
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
}

@InputType()
export class UpdateCourseInput {
  @Field()
  _id: string
  @Field()
  name?: string

  @Field()
  author?: string

  @Field()
  vip?: boolean

  @Field(type => [String])
  tags?: string[]

  @Field()
  cover?: string
}

@ArgsType()
export class CourseArgs {
  @Field(type => Int)
  @Min(0)
  skip: number = 0

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take: number = 25
}
