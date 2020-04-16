import { Document } from "mongoose";

export class LoginUserDto extends Document {
    readonly email: string;
    readonly password: string;
}