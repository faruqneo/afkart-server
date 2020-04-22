import { Document } from "mongoose";

export interface Product extends Document {
    id?: string;
    title: string;
    vendor: string;
    sku?: string;
    category: string;
    price: string;
    description: string;
    tags?: Array<string>;
    files?: Array<object>;
}