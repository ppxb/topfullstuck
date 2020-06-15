import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class CourseModel extends Document {
  @Prop()
  name: string
  @Prop()
  author: string
  @Prop()
  vip: boolean
  @Prop()
  tags: string[]
  @Prop()
  cover: string
  @Prop({ default: [] })
  episodes: string[]
}

export const CourseSchema = SchemaFactory.createForClass(CourseModel)
