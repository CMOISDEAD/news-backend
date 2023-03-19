import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Post('register')
  register(@Body() createUser: CreateUserDto): string {
    this.userService.create(createUser);
    return `user ${createUser.username} was register successfully`;
  }

  @Post('login')
  login(@Body() user: CreateUserDto): Promise<User> {
    const userFound = this.userService.findOne(user);
    return userFound;
  }

  @Post('get-user')
  async getUser(@Body() res: CreateUserDto): Promise<User> {
    return await this.userService.findById(res.id);
  }

  @Get('all')
  async getAll(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users;
  }
}
