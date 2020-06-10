import { Module } from '@nestjs/common'
import { InjectModel, MongooseModule } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { genPsd } from 'src/utils'
import { modules } from '../database/schema'
import { Admin } from './schema/admin.schema'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: `${process.env.DATABASE_URI}/${process.env.DATABASE_TABLE}`,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useFindAndModify: false
        }
      }
    }),
    modules
  ],
  exports: [modules]
})
export class DatabaseModule {
  constructor(
    @InjectModel(Admin.name) private readonly AdminModel: Model<Admin>
  ) {
    AdminModel.find({ username: 'admin' }).then(async res => {
      if (!res.length) {
        const model = new AdminModel({
          username: 'admin',
          password: await genPsd('123456')
        })
        await model.save()
      }
    })
  }
}
