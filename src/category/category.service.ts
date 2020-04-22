import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, Product } from '../interfaces';

@Injectable()
export class CategoryService {

    constructor(
        @InjectModel('Category') private readonly categoryModel: Model<Category>,
        @InjectModel('Product') private readonly productModel: Model<Product>
    ) { }

    async getCategory(): Promise<Category[]> {
        try {
            return await this.categoryModel.find()
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND)
        }
    }

    async createCategory(category: Category): Promise<Category> {
        try {
            return await this.categoryModel.create(category)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async editCategory(id: string, upadteCategory: Category): Promise<Category> {
        try {
            return await this.categoryModel.findByIdAndUpdate(id, { upadteCategory }, { new: true })
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NO_CONTENT)
        }
    }

    async deleteCategory(id: string): Promise<Category> {
        try {
            return await this.categoryModel.findByIdAndRemove(id)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY)
        }
    }
}
