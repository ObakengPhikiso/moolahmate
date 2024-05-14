import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserProfileSchema } from '../schemas/user.schema';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [MongooseModule.forFeature([{name: 'user', schema: UserProfileSchema}])]
})
export class UserModule {}
