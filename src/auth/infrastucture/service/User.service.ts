import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from 'src/auth/application/User/CreateUseCase';
import { DeleteUserUseCase } from 'src/auth/application/User/DeleteUseCase copy';
import { GetByIdUserUseCase } from 'src/auth/application/User/GetByIdUseCase';
import { GetQueryUserUseCase } from 'src/auth/application/User/GetQueryUseCase';
import { UpdateUserUseCase } from 'src/auth/application/User/UpdateUseCase';
import { PaginateDTO } from 'src/components/base/Paginate.dto';
import { CreateUserDTO, QueryUserDTO, UpdateUserDTO } from '../dto/User.dto';

@Injectable()
export class UserService {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getQueryUserUseCase: GetQueryUserUseCase,
    private getByIdUserUseCase: GetByIdUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
  ) {}

  async create(data: CreateUserDTO) {
    return await this.createUserUseCase.run(data);
  }
  async getByQuery(query: QueryUserDTO, paginate: PaginateDTO) {
    return await this.getQueryUserUseCase.run({ query, paginate });
  }
  async getById(id: string) {
    return await this.getByIdUserUseCase.run(id);
  }
  async updateById(id: string, data: UpdateUserDTO) {
    return await this.updateUserUseCase.run({ data, id });
  }
  async deleteById(id: string) {
    return await this.deleteUserUseCase.run(id);
  }
}
