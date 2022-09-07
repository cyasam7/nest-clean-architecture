import { Injectable } from '@nestjs/common';
import { IUserEntity, UserEntity } from 'src/auth/domain/entities/user.entity';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';
import { UseCaseBase } from 'src/components/base/UseCaseBase';

@Injectable()
export class GetByIdUserUseCase implements UseCaseBase<string, IUserEntity> {
  constructor(private userRepository: UserReposity) {}
  async run(id: string): Promise<IUserEntity> {
    const user = await this.userRepository.findById(id);
    return new UserEntity(user);
  }
}
