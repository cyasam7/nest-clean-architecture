import { Injectable } from '@nestjs/common';
import { LoginUseCase } from 'src/auth/application/Auth/LoginUseCase';
import { RegisterUseCase } from 'src/auth/application/Auth/RegisterUseCase';
import { LoginDTO, RegisterUserDTO } from '../dto/Auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private loginUseCase: LoginUseCase,
    private registerUseCase: RegisterUseCase,
  ) {}

  async login(data: LoginDTO) {
    return this.loginUseCase.run(data);
  }
  async register(data: RegisterUserDTO) {
    return this.registerUseCase.run(data);
  }
}
