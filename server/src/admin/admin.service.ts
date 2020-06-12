import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Admin } from 'src/database/schema'
import { genPsd } from 'src/utils'

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async initAdmin() {
    const originAdmin = await this.adminModel.find({ username: 'admin' })
    if (originAdmin.length === 0) {
      await new this.adminModel({
        username: 'admin',
        password: await genPsd('123456')
      }).save()
    }
  }
}
