import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity.js'; // 引入实体

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 注册实体
})
export class UserModule {}