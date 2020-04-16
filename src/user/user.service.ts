import { Injectable, Post, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async registration(user: User): Promise<User> {
        try {
            return await this.userModel.create(user)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

}

