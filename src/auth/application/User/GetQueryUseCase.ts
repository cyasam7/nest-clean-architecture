import { Injectable } from '@nestjs/common';
import { PaginatedUsersEntity } from 'src/auth/@types';
import { QueryUserDTO } from 'src/auth/infrastucture/dto/User.dto';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';
import { PaginateDTO } from 'src/components/base/Paginate.dto';
import { UseCaseBase } from 'src/components/base/UseCaseBase';

export interface IGetQueryUserCaseParams {
  query: QueryUserDTO;
  paginate: PaginateDTO;
}

@Injectable()
export class GetQueryUserUseCase
  implements UseCaseBase<IGetQueryUserCaseParams, PaginatedUsersEntity>
{
  constructor(private userRepository: UserReposity) {}
  async run({
    query,
    paginate,
  }: IGetQueryUserCaseParams): Promise<PaginatedUsersEntity> {
    return await this.userRepository.getByQuery({ query, paginate });
  }
}
