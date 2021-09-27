/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { GoogleService } from './google.service';

@Controller('google')
export class GoogleController {
  constructor(
    private readonly googleService: GoogleService,
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    const { email } = this.googleService.googleLogin(req);

    const oldUser = await this.userService.findUserByEmail(email);

    if (oldUser) {
      return this.authService.login({ id: oldUser.id, email: email });
    }

    const newUser = await this.userService.create({
      email,
    });

    return this.authService.login({ id: newUser.id, email: email });
  }
}
