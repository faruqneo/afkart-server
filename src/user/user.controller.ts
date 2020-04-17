import { Controller, Post, Body, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../interfaces';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from '../dto';

@ApiTags('user')
@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Post('registration')
    async registration(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.registration(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<User> {
        return await this.userService.login(loginUserDto);
    }
}
