import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AdminModule } from 'src/admin/admin.module'
import { AdminService } from 'src/admin/admin.service'

@Module({
  imports: [
    AdminModule,
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
    })
  ]
})
export class DatabaseModule {
  constructor(private readonly adminService: AdminService) {
    this.adminService.initAdmin()
  }
}
