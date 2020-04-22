import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { Product } from '../interfaces';
import { ProductDto } from '../dto';

@ApiTags('product')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @ApiQuery({ name: 'id', required: false })
    @ApiQuery({ name: 'title', required: false })
    @ApiQuery({ name: 'vendor', required: false })
    @ApiQuery({ name: 'sku', required: false })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'price', required: false })
    @ApiQuery({ name: 'tags', required: false })
    @Get()
    async getProducts(@Query() productQuery: any): Promise<any[]> {
        return await this.productService.getProducts(productQuery);
    }

    @Post()
    async createProducts(@Body() productDto: ProductDto): Promise<Product> {
        return await this.productService.createProduct(productDto);
    }

    @ApiParam({ name: 'id' })
    @Put(':id')
    async updateProducts(@Param('id') id: string, @Body() productDto: ProductDto): Promise<Product> {
        return await this.productService.editProduct(id, productDto);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    async deleteProducts(@Param('id') id: string): Promise<Product> {
        return await this.productService.deleteProduct(id);
    }

}
