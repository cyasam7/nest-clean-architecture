import { Injectable } from '@nestjs/common';
import { IUserEntity, UserEntity } from 'src/auth/domain/entities/user.entity';
import { CreateUserDTO } from 'src/auth/infrastucture/dto/User.dto';
import { HashRepository } from 'src/auth/infrastucture/repository/hash.repository';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';
import { UseCaseBase } from 'src/components/base/UseCaseBase';

@Injectable()
export class CreateUserUseCase
  implements UseCaseBase<CreateUserDTO, IUserEntity>
{
  constructor(
    private userRepository: UserReposity,
    private hashRepository: HashRepository,
  ) {}

  async run(data: CreateUserDTO): Promise<IUserEntity> {
    const newPassword = this.hashRepository.hash(data.password);

    const newUser = {
      ...data,
      password: newPassword,
    };

    const user = await this.userRepository.create(newUser);
    return new UserEntity(user);
  }
}
