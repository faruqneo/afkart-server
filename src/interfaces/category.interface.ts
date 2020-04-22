import { Document, Schema } from "mongoose";

export interface Category extends Document {
    id?: string;
    title: string;
    products?: Array<Schema.Types.ObjectId>;
}