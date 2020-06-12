import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Admin, AdminSchema } from '../database/schema'
import { AdminResolver } from './admin.resolver'
import { AdminService } from './admin.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }])
  ],
  providers: [AdminResolver, AdminService],
  exports: [AdminService]
})
export class AdminModule {}
