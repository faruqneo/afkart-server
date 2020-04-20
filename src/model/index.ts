<<<<<<< HEAD


export const Models = [];
=======
import * as mongoose from 'mongoose';

import { UserSchema } from "./users.schema";


export const Models = [
    { name: 'User', schema: new mongoose.Schema(UserSchema) }
];
>>>>>>> fb59fe3cbe8de59dd20ed236fca5bb0f8ae35cd4
