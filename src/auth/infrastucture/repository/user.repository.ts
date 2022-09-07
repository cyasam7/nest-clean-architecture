import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, QueryOptions } from 'mongoose';
import { PaginatedUsersEntity } from 'src/auth/@types';
import { IGetQueryUserCaseParams } from 'src/auth/application/User/GetQueryUseCase';
import { IUserRepository } from 'src/auth/domain/repository/user.repository';
import { RegisterUserDTO } from '../dto/Auth.dto';
import { QueryUserDTO, UpdateUserDTO } from '../dto/User.dto';
import { User, UserDocument } from '../model/user.model';

@Injectable()
export class UserReposity implements IUserRepository {
  constructor(@InjectModel(User.name) private UserModel: PaginateModel<User>) {}

  async getByQuery({
    query,
    paginate,
  }: IGetQueryUserCaseParams): Promise<PaginatedUsersEntity> {
    return await this.UserModel.paginate(query, paginate);
  }

  async deleteById(id: string): Promise<void> {
    await this.UserModel.deleteOne({ _id: id });
  }
  async updateById(id: string, data: UpdateUserDTO): Promise<void> {
    await this.UserModel.updateOne({ _id: id }, data);
  }

  async findOne(query: any): Promise<UserDocument | null> {
    return await this.UserModel.findOne(query);
  }

  async create(user: RegisterUserDTO): Promise<UserDocument> {
    return await this.UserModel.create(user);
  }
  async findById(id: string): Promise<UserDocument | null> {
    return await this.UserModel.findOne({ _id: id });
  }
}
