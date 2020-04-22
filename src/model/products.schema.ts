import { uuid } from 'node-uuid'
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
        default: uuid.v1
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