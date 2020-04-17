import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export class LoginUserDto extends Document {
    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;
}