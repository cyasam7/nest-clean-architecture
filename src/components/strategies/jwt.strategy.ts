import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserDocument } from 'src/auth/infrastucture/model/user.model';
import { IPayloadToken } from 'src/auth/infrastucture/repository/jwt.repositor';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';

import { IEnvConfig } from 'src/config';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService<IEnvConfig>,
    private userRepository: UserReposity,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET_WORD'),
    });
  }

  async validate(payload: IPayloadToken): Promise<UserDocument> {
    const user = await this.userRepository.findById(payload.sub);
    if (!user) throw new UnauthorizedException('No existe usuario con ese id');
    return user;
  }
}
