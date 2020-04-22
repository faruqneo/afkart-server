import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from '../model';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
    imports: [MongooseModule.forFeature(Models)],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule {}
