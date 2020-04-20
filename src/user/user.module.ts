import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from '../model';


@Module({
  imports: [MongooseModule.forFeature(Models)],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
