import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginatedUsersEntity } from 'src/auth/@types';
import { UserEntity } from 'src/auth/domain/entities/user.entity';
import { PaginateDTO } from 'src/components/base/Paginate.dto';
import { JWTStrategy } from 'src/components/strategies/jwt.strategy';
import { CreateUserDTO, QueryUserDTO, UpdateUserDTO } from '../dto/User.dto';
import { UserService } from '../service/User.service';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JWTStrategy)
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(200)
  @Get('/')
  async getAll(
    @Query() query: QueryUserDTO,
    @Query() paginate: PaginateDTO,
  ): Promise<PaginatedUsersEntity> {
    return await this.userService.getByQuery(query, paginate);
  }

  @HttpCode(201)
  @Post('/')
  async create(@Body() data: CreateUserDTO): Promise<UserEntity> {
    return await this.userService.create(data);
  }

  @HttpCode(200)
  @Get('/:id')
  async getById(@Param('id') id: string): Promise<UserEntity> {
    return await this.userService.getById(id);
  }

  @HttpCode(200)
  @Put('/:id')
  async updateById(
    @Param('id') id: string,
    @Body() data: UpdateUserDTO,
  ): Promise<void> {
    return await this.userService.updateById(id, data);
  }

  @HttpCode(200)
  @Delete('/:id')
  async deleteById(@Param('id') id: string): Promise<void> {
    return await this.userService.deleteById(id);
  }
}
