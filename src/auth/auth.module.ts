import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { User, UserSchema } from './infrastucture/model/user.model';
import { UserReposity } from './infrastucture/repository/user.repository';
import { LoginUseCase } from './application/Auth/LoginUseCase';
import { AuthController } from './infrastucture/controllers/auth.routes';
import { UserController } from './infrastucture/controllers/user.routes';
import { HashRepository } from './infrastucture/repository/hash.repository';
import { JwtRepository } from './infrastucture/repository/jwt.repositor';
import { RegisterUseCase } from './application/Auth/RegisterUseCase';
import { CreateUserUseCase } from './application/User/CreateUseCase';
import { DeleteUserUseCase } from './application/User/DeleteUseCase copy';
import { GetByIdUserUseCase } from './application/User/GetByIdUseCase';
import { GetQueryUserUseCase } from './application/User/GetQueryUseCase';
import { UpdateUserUseCase } from './application/User/UpdateUseCase';
import { UserService } from './infrastucture/service/User.service';
import { AuthService } from './infrastucture/service/Auht.service';
import { config, IEnvConfig } from 'src/config';
import { JWTStrategy } from 'src/components/strategies/jwt.strategy';
import { Role, RoleSchema } from './infrastucture/model/role.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      {
        name: Role.name,
        schema: RoleSchema,
      },
    ]),

    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: async (config: IEnvConfig) => {
        return {
          secret: config.SECRET_WORD,
          signOptions: { expiresIn: config.EXPIRATION_TIME_ACCESS_TOKEN },
        };
      },
    }),
  ],
  controllers: [AuthController, UserController],
  providers: [
    //Repositories
    UserReposity,
    HashRepository,
    JwtRepository,
    //Use Cases
    LoginUseCase,
    RegisterUseCase,
    CreateUserUseCase,
    DeleteUserUseCase,
    GetByIdUserUseCase,
    GetQueryUserUseCase,
    UpdateUserUseCase,
    //Services
    UserService,
    AuthService,
    //Strategies
    JWTStrategy,
  ],
  exports: [
    UserReposity,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      {
        name: Role.name,
        schema: RoleSchema,
      },
    ]),
  ],
})
export class AuthModule {}
