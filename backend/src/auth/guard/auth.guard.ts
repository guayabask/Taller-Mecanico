import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants/jst.constants';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly jwtService: JwtService,
  ){}

  async canActivate(context: ExecutionContext,): Promise<boolean>{

    const request = context.switchToHttp().getRequest();
    console.log(request.headers);
    const token = request.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
  
}
