import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OptionalUserGuard extends AuthGuard('jwt') {
  handleRequest(_, user) {
    return user || {};
  }
}
