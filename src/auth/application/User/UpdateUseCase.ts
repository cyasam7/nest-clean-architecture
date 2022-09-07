import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from 'src/auth/infrastucture/dto/User.dto';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';
import { UseCaseBase } from 'src/components/base/UseCaseBase';

export interface IUpdateUserUseCaseParams {
  data: UpdateUserDTO;
  id: string;
}
@Injectable()
export class UpdateUserUseCase
  implements UseCaseBase<IUpdateUserUseCaseParams, void>
{
  constructor(private userRepository: UserReposity) {}
  async run({ data, id }: IUpdateUserUseCaseParams): Promise<void> {
    this.userRepository.updateById(id, data);
  }
}
