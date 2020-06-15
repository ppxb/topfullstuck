import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CourseModel, CourseSchema } from 'src/database/schema'
import { CoursesResolver } from './courses.resolver'
import { CoursesService } from './courses.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CourseModel.name, schema: CourseSchema }
    ])
  ],
  providers: [CoursesResolver, CoursesService]
})
export class CourseModule {}
