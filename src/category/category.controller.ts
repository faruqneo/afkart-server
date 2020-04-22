import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { Category } from '../interfaces';
import { CategoryDto } from '../dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Get()
    async getCategory(): Promise<Category[]> {
        return await this.categoryService.getCategory();
    }

    @Post()
    async createCategory(@Body() createCategory: CategoryDto): Promise<Category> {
        return await this.categoryService.createCategory(createCategory);
    }

    @ApiParam({ name: 'id' })
    @Put(':id')
    async editCategory(@Param('id') id: string, @Body() updateCategory: CategoryDto): Promise<Category> {
        return await this.categoryService.editCategory(id, updateCategory);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    async deleteCategory(@Param('id') id: string): Promise<Category> {
        return await this.categoryService.deleteCategory(id);
    }
}
