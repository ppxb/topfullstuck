import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CourseModel } from '../database/schema/course.model'
import { CourseType } from '../graphql/types'
import { CourseArgs, NewCourseInput, UpdateCourseInput } from './courses.dto'

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(CourseModel.name) private Course: Model<CourseModel>
  ) {}

  async create(newCourseInput: NewCourseInput): Promise<CourseType> {
    return new this.Course(newCourseInput).save()
  }

  async delete(id: string): Promise<boolean> {
    const deleteCourse = await this.Course.findByIdAndDelete(id)
    if (deleteCourse) return true
    return false
  }

  async update(updateCourseInput: UpdateCourseInput): Promise<CourseType> {
    return this.Course.findByIdAndUpdate(
      updateCourseInput._id,
      updateCourseInput
    )
  }

  async one(id: string): Promise<CourseType> {
    return this.Course.findById(id)
  }

  async all(courseArgs: CourseArgs): Promise<CourseType[]> {
    return this.Course.find().setOptions({ ...courseArgs })
  }
}
