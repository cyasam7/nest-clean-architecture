import { SetMetadata } from '@nestjs/common';
import { ERoles } from 'src/auth/infrastucture/model/user.model';

export enum Action {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export const CreatePermission = (...roles: ERoles[]): void =>
  void SetMetadata(
    Action.CREATE,
    roles.map((i) => `${i}:${Action.CREATE}`),
  );
