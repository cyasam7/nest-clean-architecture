import { Injectable } from '@nestjs/common';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';
import { UseCaseBase } from 'src/components/base/UseCaseBase';

@Injectable()
export class DeleteUserUseCase implements UseCaseBase<string, void> {
  constructor(private userRepository: UserReposity) {}
  async run(id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}
