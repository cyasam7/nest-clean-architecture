import { SetMetadata } from '@nestjs/common';
import { ERoles } from 'src/auth/infrastucture/model/user.model';
import { Action } from './create.decorator';

export const DeletePermission = (...roles: ERoles[]): void =>
  void SetMetadata(
    Action.DELETE,
    roles.map((i) => `${i}:${Action.DELETE}`),
  );
