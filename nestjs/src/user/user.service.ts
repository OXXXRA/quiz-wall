import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { genSaltSync, hashSync } from 'bcryptjs';
import { Repository } from 'typeorm';
import { LoginDto } from '../auth/dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: LoginDto) {
    const salt = genSaltSync(5);

    const user = await this.userRepository.save({
      email: dto.email,
      password: dto.password ? hashSync(dto.password, salt) : null,
    });

    return user;
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  findAll(query: any) {
    const { nickname, email } = query;

    return this.userRepository.find({
      where: {
        email,
        nickname,
      },
    });
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
