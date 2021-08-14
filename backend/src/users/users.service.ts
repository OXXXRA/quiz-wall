import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import User from './user.entity';

@Injectable()
export default class UsersService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {};
  async createUser(dto: CreateUserDto) {
    const user = await this.UserRepository.create(dto);
    await this.UserRepository.save(user);
    return user;
  }
  async getAllUser() {
    const users = await this.UserRepository.find();
    return users;
  }
  async getUserByEmail(email: string) {
    const user = await this.UserRepository.findOne({where: {email: email}});
    return user;
  }
}
