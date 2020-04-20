import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class CreateUserDto extends Document {
    @ApiProperty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    readonly phoneNo: number;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;
}