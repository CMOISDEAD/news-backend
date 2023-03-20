import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './interfaces/user.interface';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(user: UserType) {
    const response = await this.usersRepository.save(user);
    return response;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(user: User): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        username: user.username,
        password: user.password,
      },
    });
  }

  findById(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
