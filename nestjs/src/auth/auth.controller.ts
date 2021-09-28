import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  NotAcceptableException,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthUser } from '../$core/decorators/auth-user.decorator';
import { UserService } from '../user/user.service';
import { AuthGuard } from './../$core/guards/jwt.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { MailService } from './../mail/mail.service';
import { IAuthUser } from '../$core/types/AuthUser';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  @Post('register')
  async register(@Body() dto: LoginDto) {
    const oldUser = await this.userService.findUserByEmail(dto.email);

    if (oldUser) throw new BadRequestException('User email alread register');

    const user = await this.userService.create(dto);

    const payload = {
      email: user.email,
      id: user.id,
    };

    const token = await this.authService.login(payload);

    const emailToken = await this.authService.getEmailToken(payload);

    this.mailService.sendUserConfirmation(user.email, emailToken);

    return {
      user,
      token,
    };
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() { email, password }: LoginDto) {
    await this.authService.validateUser(email, password);

    const user = await this.userService.findUserByEmail(email);

    const token = await this.authService.login({
      id: user.id,
      email: user.email,
    });

    return {
      user,
      token,
    };
  }

  @Get('me')
  @UseGuards(AuthGuard)
  me(@AuthUser() user: IAuthUser) {
    return this.userService.findUserByEmail(user.email);
  }

  @Get('confirm-email')
  confirmEmail(@Query('token') token: string) {
    if (!token) {
      throw new NotAcceptableException('provide token');
    }
    return this.authService.validateEmailToken(token);
  }
}
