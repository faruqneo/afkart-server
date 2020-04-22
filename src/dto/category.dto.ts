import { ApiProperty } from "@nestjs/swagger";
import { Document, Schema } from "mongoose";

export class CategoryDto extends Document {
    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly products: Array<Schema.Types.ObjectId>;
}