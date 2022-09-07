import { PaginatedUsersEntity } from 'src/auth/@types';
import { IGetQueryUserCaseParams } from 'src/auth/application/User/GetQueryUseCase';
import {
  CreateUserDTO,
  QueryUserDTO,
  UpdateUserDTO,
} from 'src/auth/infrastucture/dto/User.dto';
import { UserDocument } from 'src/auth/infrastucture/model/user.model';

export interface IUserRepository {
  create(user: CreateUserDTO): Promise<UserDocument>;
  findOne(query: QueryUserDTO): Promise<UserDocument> | null;
  findById(uuid: string): Promise<UserDocument> | null;
  deleteById(id: string): Promise<void>;
  updateById(id: string, data: UpdateUserDTO): Promise<void>;
  getByQuery(query: IGetQueryUserCaseParams): Promise<PaginatedUsersEntity>;
}
