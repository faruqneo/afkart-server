import * as mongoose from 'mongoose';

import { UserSchema } from "./users.schema";


export const Models = [
    { name: 'User', schema: new mongoose.Schema(UserSchema) }
];
