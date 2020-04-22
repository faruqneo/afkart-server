import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Document, Schema } from "mongoose";

export class CategoryDto extends Document {
    @ApiProperty()
    readonly title: string;

    // @ApiPropertyOptional()
    // readonly products?: Array<Schema.Types.ObjectId>;
}