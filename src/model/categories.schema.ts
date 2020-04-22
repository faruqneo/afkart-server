import { Schema } from 'mongoose';

export const CategorySchema = {

    title: {
        type: String,
        trim: true,
        required: [true, 'Please enter categoy title']
    },

    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
}