import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class GoogleService {
  googleLogin(req) {
    if (!req.user) {
      throw new BadRequestException();
    }

    return req.user;
  }
}
