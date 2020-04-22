import { v4 as uuidv4 } from 'uuid';
import { Schema } from 'mongoose';

export const ProductSchema = {

    title: {
        type: String,
        trim: true,
        required: [true, 'Please enter product title']
    },

    vendor: {
        type: String,
        trim: true,
        required: [true, 'Please enter product vendor']
    },

    sku: {
        type: String,
        default: uuidv4
    },

    category: {
        type: Schema.Types.ObjectId,
        required: [true, 'Please enter product category'],
        ref: 'Category'
    },

    price: {
        type: String,
        trim: true,
        required: [true, 'Please enter product price'],
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Please enter product description'],
    },

    tags: {
        type: Array
    },

    files: {
        type: Array
    }
};