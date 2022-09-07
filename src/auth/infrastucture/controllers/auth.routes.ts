import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ILoginUseCase } from 'src/auth/application/Auth/LoginUseCase';
import { LoginDTO, RegisterUserDTO } from '../dto/Auth.dto';
import { AuthService } from '../service/Auht.service';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: LoginDTO): Promise<ILoginUseCase> {
    return this.authService.login(body);
  }

  @Post('/sign-up')
  async signUp(@Body() data: RegisterUserDTO): Promise<boolean> {
    return this.authService.register(data);
  }
}
