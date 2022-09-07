import { SetMetadata } from '@nestjs/common';
import { ERoles } from 'src/auth/infrastucture/model/user.model';
import { Action } from './create.decorator';

export const UpdatePermission = (...roles: ERoles[]): void =>
  void SetMetadata(
    Action.UPDATE,
    roles.map((i) => `${i}:${Action.UPDATE}`),
  );
