import * as mongoose from 'mongoose';

import { UserSchema } from "./users.schema";
import { ProductSchema } from './products.schema';
import { CategorySchema } from './categories.schema';


export const Models = [
    { name: 'User', schema: new mongoose.Schema(UserSchema) },
    { name: 'Product', schema: new mongoose.Schema(ProductSchema) },
    { name: 'Category', schema: new mongoose.Schema(CategorySchema) }
];
