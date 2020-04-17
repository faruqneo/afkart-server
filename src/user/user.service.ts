import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '../interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async registration(user: User): Promise<User> {
        try {
            user["password"] = await bcrypt.hash(user.password, 10);
            const secretOrKey = process.env.SECRET_KEY;
            user["accessToken"] = jwt.sign(user, secretOrKey);
            return await this.userModel.create(user)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.FORBIDDEN);
        }
    }

    async login(user: User): Promise<any> {
        try {
            const { email, password } = user;
            const data = await this.userModel.findOne({ email });
            const match = await bcrypt.compare(password, data.password);
            if (match)
                return data;
            throw new HttpException('Please enter valid credentials', HttpStatus.NOT_FOUND);
        } catch (error) {
            throw new HttpException('Please enter valid credentials', HttpStatus.NOT_FOUND);
        }
    }

}

