import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('register')
  async register(@Body() createUser: CreateUserDto): Promise<CreateUserDto> {
    return await this.userService.create(createUser);
  }

  @Post('login')
  login(@Body() user: CreateUserDto): Promise<User> {
    const userFound = this.userService.findOne(user);
    return userFound;
  }

  @Post('get-user')
  async getUser(@Body() response: User): Promise<User> {
    const { id } = response;
    return await this.userService.findById(id);
  }

  @Post('remove')
  async remove(@Body() response: User) {
    const { id } = response;
    await this.userService.remove(id);
  }

  @Get('all')
  async getAll(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users;
  }
}
