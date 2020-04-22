import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class ProductDto extends Document {
    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly vendor: string;

    @ApiProperty()
    readonly category: string;

    @ApiProperty()
    readonly price: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly tags: Array<string>;

    @ApiProperty()
    readonly files: Array<object>;
}