import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, Category } from '../interfaces';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
        @InjectModel('Category') private readonly categoryModel: Model<Category>
    ) { }

    async getProducts(productQuery: Product): Promise<any[]> {
        const { id, title, vendor, sku, category, price, tags } = productQuery
        try {
            const options = {};

            if (id)
                options["_id"] = id;
            if (title)
                options['title'] = title;
            if (vendor)
                options["vendor"] = vendor;
            if (sku)
                options["sku"] = sku;
            if (category)
                options["category"] = category;
            if (price)
                options["price"] = price;
            if (tags)
                options["tags"] = { $in: [...tags] };

            return await this.productModel.find(options);
        } catch (error) {
            console.log(error)
            throw new HttpException('No data found', HttpStatus.NOT_FOUND);
        }
    }

    async createProduct(product: Product): Promise<Product> {
        try {
            console.log(product)
            const data = await this.productModel.create(product);
            console.log(data)
            await this.categoryModel.findByIdAndUpdate(data.category, { $push: { products: data._id } }, { new: true, upsert: true });
            return data;
            // return await this.productModel.create(product);
        } catch (error) {
            console.log(error)
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async editProduct(id: string, product: Product): Promise<Product> {
        try {
            const data = await this.productModel.findByIdAndUpdate(id, product, { new: true });
            if (product.category && data) {
                await this.categoryModel.update({}, { $pull: { products: id } }, { multi: true });
                await this.categoryModel.findByIdAndUpdate(product.category, { $push: { products: id } }, { new: true, upsert: true });
            }
            return data;
        } catch (error) {
            console.log(error)
            throw new HttpException('Please enter valid id', HttpStatus.NO_CONTENT);
        }
    }

    async deleteProduct(id: string): Promise<Product> {
        try {
            await this.categoryModel.update({}, { $pull: { products: id } }, { multi: true });
            return await this.productModel.findByIdAndRemove(id);
        } catch (error) {
            console.log(error)
            throw new HttpException('Please enter valid id', HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
