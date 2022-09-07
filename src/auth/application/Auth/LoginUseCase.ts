import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IUserEntity, UserEntity } from 'src/auth/domain/entities/user.entity';
import { LoginDTO } from 'src/auth/infrastucture/dto/Auth.dto';
import { ERoles } from 'src/auth/infrastucture/model/user.model';
import { HashRepository } from 'src/auth/infrastucture/repository/hash.repository';
import {
  IPayloadToken,
  JwtRepository,
} from 'src/auth/infrastucture/repository/jwt.repositor';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';
import { UseCaseBase } from 'src/components/base/UseCaseBase';

export interface ILoginUseCase {
  user: IUserEntity;
  token: string;
}

@Injectable()
export class LoginUseCase implements UseCaseBase<LoginDTO, ILoginUseCase> {
  constructor(
    private hashRepository: HashRepository,
    private userRepository: UserReposity,
    private jwtRepository: JwtRepository,
  ) {}

  async run(data: LoginDTO): Promise<ILoginUseCase> {
    const user = await this.userRepository.findOne({ email: data.email });

    if (!user) {
      throw new NotFoundException('Usuario no existe');
    }

    const isSamePassword = this.hashRepository.compare(
      data.password,
      user.password,
    );

    if (!isSamePassword) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload: IPayloadToken = {
      sub: user._id,
      role: ERoles.GUEST_USER,
    };

    const jwt = this.jwtRepository.generateJWT(payload);

    return {
      user: new UserEntity(user),
      token: jwt,
    };
  }
}
