import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { use } from 'passport';
import { of } from 'rxjs';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);

    if (!user) throw new UnauthorizedException();

    const isCorrectPassword = compare(password, user.password);

    if (!isCorrectPassword) throw new UnauthorizedException();

    return {
      id: user.id,
      email: user.email,
    };
  }

  async login({ id, email }) {
    const payload = { id, email };

    return await this.jwtService.signAsync(payload);
  }

  async getEmailToken({ id, email }) {
    const payload = { id, email };

    return await this.jwtService.signAsync(payload, {
      expiresIn: '1d',
    });
  }

  async validateEmailToken(token: string) {
    try {
      const { id, email } = await this.jwtService.verifyAsync(token);

      if (!email) throw new BadRequestException('token is expired');

      return await this.userService.verifyEmail(id);
    } catch (error) {
      throw new BadRequestException('token is invalid');
    }
  }
}
