import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from 'src/model';

@Module({
  imports: [MongooseModule.forFeature(Models)],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
