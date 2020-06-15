import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CourseType } from '../graphql/types'
import { CourseArgs, NewCourseInput, UpdateCourseInput } from './courses.dto'
import { CoursesService } from './courses.service'

@Resolver(of => CourseType)
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}

  @Query(returns => CourseType)
  async course(@Args('id') id: string): Promise<CourseType> {
    return await this.coursesService.one(id)
  }

  @Query(returns => [CourseType])
  async courses(@Args() courseArgs: CourseArgs): Promise<CourseType[]> {
    return await this.coursesService.all(courseArgs)
  }

  @Mutation(returns => CourseType)
  async addCourse(
    @Args('newCourseInput') newCourseInput: NewCourseInput
  ): Promise<CourseType> {
    return await this.coursesService.create(newCourseInput)
  }

  @Mutation(returns => CourseType)
  async updateCourse(
    @Args('updateCourseInput') updateCourseInput: UpdateCourseInput
  ): Promise<CourseType> {
    return await this.coursesService.update(updateCourseInput)
  }

  @Mutation(returns => Boolean)
  async deleteCourse(@Args('id') id: string) {
    return await this.coursesService.delete(id)
  }
}
