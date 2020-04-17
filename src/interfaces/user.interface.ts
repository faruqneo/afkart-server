import { Document } from "mongoose";

export interface User extends Document {
    id?: string;
    firstName?: string;
    lastName?: string;
    phoneNo?: number;
    email: string;
    password: string;
    accessToken?: string;
}