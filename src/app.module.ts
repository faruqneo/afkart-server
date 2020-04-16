import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }), UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
